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
   
第二个参数shards就是所有节点信息的集合包括：节点IP，监听port，密码password。最后参数和另外两个参数一起构建一个ShardedJedisFactory对象，ShardedJedis就是
从这个工厂对象里生产的。

.. code-block:: java

    public ShardedJedisPool(final GenericObjectPool.Config poolConfig,
            List<JedisShardInfo> shards, Hashing algo, Pattern keyTagPattern) {
        super(poolConfig, new ShardedJedisFactory(shards, algo, keyTagPattern));
    }

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
   对于每个节点（不同IP和端口）分配160*Weight（默认为1）个虚拟节点，这160*Weight（默认为1）个虚拟节点都指向同一个真实节点
   
   对每个真实节点增加虚拟节点作用为尽可能的分散节点的分布状态
   
   KEY如何分配到节点？根据KEY的HASH从所有虚拟节点圈中选取一个虚拟节点-->真实节点
   
