Jedis2.1之ShardedJedisPool分析
================================

.. note:: 
   此版本ShardedJedisPool适用于Jedis2.1版本，reids 2.6版本
   
   依赖的jar包：commons-collections.jar和commons-pool.jar
   
   
``Jedis`` 作为推荐的java语言redis客户端，ShardedJedis是基于一致性哈希算法实现的分布式Redis集群客户端。

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