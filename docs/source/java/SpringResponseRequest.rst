SpringMVC@Response@Request注解简注
==========================================

spring mcv消息转化机制
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

SpringMVC中使用@RequestBody,@ResponseBody注解实现Java对象和XML/JSON数据自动转换，Spring是怎么实现这个转换的呢？我们先了解下Spring的消息转换机制。

在SpringMVC中，可以使用@RequestBody和@ResponseBody两个注解，分别完成请求报文到对象和对象到响应报文的转换，底层这种灵活的消息转换机制，就是Spring3.x中新引入的HttpMessageConverter即消息转换器机制。

我们可以用下面的图，简单描述一下这个过程。

.. image:: ../../images/java/sp_res_req1.jsp

@Response篇
^^^^^^^^^^^^^^^^^^

作用：该注解用于将Controller的方法返回的对象，通过适当的HttpMessageConverter转换为指定格式(xml、json)后，写入到Response对象的body数据区。
使用时机：返回的数据不是html标签的页面，而是其他某种格式的数据时（如json、xml等）

@ResponseBody注解，以及HTTP Request Header中的Accept属性，Controller返回的Java对象可以自动被转换成对应的XML或者JSON数据。

返回XML格式必须满足两个条件要求：

a) 返回对象的类具有XmlRootElement注解

b) 请求头中的Accept属性包含application/xml

返回json格式我们只要把Jackson2或者GSON加入工程的class path，Spring就会自动把GsonHttpMessageConverter加进来。



@RequestBody篇
^^^^^^^^^^^^^^^^^^

作用： 

i) 该注解用于读取Request请求的body部分数据，使用系统默认配置的HttpMessageConverter进行解析，然后把相应的数据绑定到要返回的对象上；

ii) 再把HttpMessageConverter返回的对象数据绑定到 controller中方法的参数上。

使用时机：
A) GET、POST方式提时， 根据request header Content-Type的值来判断:

 * application/x-www-form-urlencoded， 可选（即非必须，因为这种情况的数据@RequestParam, @ModelAttribute也可以处理，当然@RequestBody也能处理）；
 * multipart/form-data, 不能处理（即使用@RequestBody不能处理这种格式的数据）；
 * 其他格式， 必须（其他格式包括application/json, application/xml等。这些格式的数据，必须使用@RequestBody来处理）；
 
B) PUT方式提交时， 根据request header Content-Type的值来判断:

 * application/x-www-form-urlencoded， 必须；
 * multipart/form-data, 不能处理；
 * 其他格式， 必须；
 
说明：request的body部分的数据编码格式由header部分的Content-Type指定

配合@RequestBody注解，以及HTTP Request Header中的Content-Type属性，HTTP Request Body中包含的XML或者JSON数据可以自动被转换成对应的Java对象。


补充
^^^^^^^^^^^^^^^^^^

MappingJacksonHttpMessageConverter 调用了 objectMapper.writeValue(OutputStream stream, Object)方法，使用@ResponseBody注解返回的对象就传入Object参数内。若返回的对象为已经格式化好的json串时，不使用@RequestBody注解，而应该这样处理：

1、response.setContentType("application/json; charset=UTF-8");

2、response.getWriter().print(jsonStr);

直接输出到body区，然后的视图为void。



总结
^^^^^^^^

根据request header中的Content-Type自动转换XML/JSON->JAVA对象，如果为application/xml则请求体需xml格式，反之为json格式

根据request header中的Accept自动选择返回XML or JSON (对象需要添加XmlRootElement)