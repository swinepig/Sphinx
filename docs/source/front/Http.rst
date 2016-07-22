﻿Http报头Accept与Content-Type的区别
============================================

Accept属于请求头， Content-Type属于实体头。 
Http报头分为通用报头，请求报头，响应报头和实体报头。 
请求方的http报头结构：通用报头|请求报头|实体报头 
响应方的http报头结构：通用报头|响应报头|实体报头

Accept代表发送端（客户端）希望接受的数据类型。 
比如：Accept：text/xml; 
代表客户端希望接受的数据类型是xml类型

Content-Type代表发送端（客户端|服务器）发送的实体数据的数据类型。 
比如：Content-Type：text/html; 
代表发送端发送的数据格式是html。

二者合起来， 
Accept:text/xml； 
Content-Type:text/html 
即代表希望接受的数据类型是xml格式，本次请求发送的数据的数据格式是html。