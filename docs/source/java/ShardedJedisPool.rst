Jedis2.1之ShardedJedisPool分析
================================

.. note:: 
   此版本ShardedJedisPool适用于Jedis2.1版本，reids 2.6版本
   
   依赖的jar包：commons-collections.jar和commons-pool.jar
   
   
``Jedis`` 作为推荐的java语言redis客户端，ShardedJedis是基于一致性哈希算法实现的分布式Redis集群客户端。

先来看一段获取ShardedJedis对象的代码

.. code-block:: java

   List<JedisShardInfo> shards = new ArrayList<JedisShardInfo>();
   shards.add(new JedisShardInfo(redis1.host, redis1.port));
   shards.add(new JedisShardInfo(redis2.host, redis2.port));
   shards.get(0).setPassword("foobared");
   shards.get(1).setPassword("foobared");
   ShardedJedisPool pool = new ShardedJedisPool(new Config(), shards);
   ShardedJedis jedis = pool.getResource();
   jedis.disconnect();
   pool.returnBrokenResource(jedis);

   jedis = pool.getResource();
   jedis.incr("foo");
   pool.returnResource(jedis);
   pool.destroy();

ShardedJedis这个对象通过ShardedJedisPool来创建

.. code-block:: java
  
   ShardedJedisPool pool = new ShardedJedisPool(final GenericObjectPool.Config poolConfig,List<JedisShardInfo> shards)
   
第二个参数shards就是所有节点信息的集合包括：节点IP，监听port，密码password。最后参数和另外两个参数一起构建一个ShardedJedisFactory对象(为ShardedJedisPool私有内部对象)，ShardedJedis就是
从这个工厂对象里生产的。

.. code-block:: java

    public ShardedJedisPool(final GenericObjectPool.Config poolConfig,
            List<JedisShardInfo> shards, Hashing algo, Pattern keyTagPattern) {
        super(poolConfig, new ShardedJedisFactory(shards, algo, keyTagPattern));
    }

.. code-block:: java

   jedis = pool.getResource();
   
可以看出jedis对象是从池中获取的，分析代码可知pool.getResource()->internalPool.borrowObject()->factory.makeObject()。最后通过上面创建的ShardedJedisFactory对象
的makeObject()方法得到了ShardedJedis对象。

.. code-block:: java

   public Object makeObject() throws Exception {
            ShardedJedis jedis = new ShardedJedis(shards, algo, keyTagPattern);
            return jedis;
        }

构建ShardedJedis对象时进行了一步初始化操作，通过一致性哈希算法将所有节点(server)散列开来。

.. code-block:: java

   private void initialize(List<S> shards) {
        nodes = new TreeMap<Long, S>();
        for (int i = 0; i != shards.size(); ++i) {
            final S shardInfo = shards.get(i);
            if (shardInfo.getName() == null)
            	for (int n = 0; n < 160 * shardInfo.getWeight(); n++) {
            		nodes.put(this.algo.hash("SHARD-" + i + "-NODE-" + n), shardInfo);
            	}
            else
            	for (int n = 0; n < 160 * shardInfo.getWeight(); n++) {
            		nodes.put(this.algo.hash(shardInfo.getName() + "*" + shardInfo.getWeight() + n), shardInfo);
            	}
            resources.put(shardInfo, shardInfo.createResource());
        }
    }
    
.. note::
   Redis服务器节点划分：将每台服务器节点采用hash算法划分为160个虚拟节点(可以配置划分权重)
   
   将划分虚拟节点采用TreeMap存储
   
   对每个Redis服务器的物理连接采用LinkedHashMap存储
   
   对Key or KeyTag 采用同样的hash算法，然后从TreeMap获取大于等于键hash值得节点，取最邻近节点存储；当key的hash值大于虚拟节点hash值得最大值时，存入第一个虚拟节点

   sharded采用的hash算法：MD5 和 MurmurHash两种；默认采用64位的MurmurHash算法；MurmurHash是一种高效，低碰撞的hash算法
   

.. code-block:: java

   jedis.incr("foo");
   
   //incr方法
   public Long incr(String key) {
			Jedis j = getShard(key);
			return j.incr(key);
    }
    
    public String set(String key, String value) {
	  	Jedis j = getShard(key);
	    return j.set(key, value);
    }

    public String get(String key) {
			Jedis j = getShard(key);
	    return j.get(key);
    }
    
所以可以看到最终还是通过Jedis对象来和redis通信.

getShard方法

.. code-block:: java

    public R getShard(byte[] key) {
        return resources.get(getShardInfo(key));
    }
    
getShardInfo方法

.. code-block:: java

    public S getShardInfo(byte[] key) {
        SortedMap<Long, S> tail = nodes.tailMap(algo.hash(key));
        if (tail.isEmpty()) {
            return nodes.get(nodes.firstKey());
        }
        return tail.get(tail.firstKey());
    }

   
