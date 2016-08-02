SpringMVC整合新浪微博oauth2简例
==========================================
现在很多网站都整合了便捷的第三方登录，如QQ登录、新浪微博等，为用户提供不少方便和节约时间。

准备阶段

* 搭建好SpringMVC环境
* 首先申请新浪微博网站接入：http://open.weibo.com/wiki/
* 成为开发者得到App Key和App Secret
* 下载weibo4j-oauth2SDK：http://code.google.com/p/weibo4j/downloads/list

下载解压后，将src目录下weibo4j文件夹以及config.properties拷贝至自己 JAVA WEB 项目的src目录下(也可以把src下的源码打成jar包)。

编辑config.properties配置文件，改成成自己的资料。第一个填写你申请的App Key值，第二个填写App Secret值。

.. code-block:: java

   client_ID =     
   client_SERCRET =
   redirect_URI =

.. image:: ../../images/fish2.jpg


第三个redirect_URI，是你的重定向后的网址。应该对应一个控制器（Spring Controller）或 Servlet。在这里我们需要两个网址，第一个网址即用户在页面上点击的网址，能跳转到新浪微博账号登录界面，当用户点击账号登陆界面的登录按钮时，新浪微博会去校验资料正确性，一旦资料正确将会以 get 方式请求并且携带参数code重定向到你填写的redirect_URI，此时就能获取用户的资料了。
   
假如首先用户点击 http://localhost/api/weibo/login1，我们接收请求后主要工作是重定向到新浪微博登录页面。代码片段如下：  

.. code-block:: java

   /***
	 * 新浪微博登录界面
	 * @param request
	 * @param session
	 * @return
	 * @throws WeiboException
	 */
	@RequestMapping(value="/weibo/login1",method=RequestMethod.GET)
	public String loginSinaWeibo(HttpServletRequest request, HttpSession session) throws WeiboException{
		session.setAttribute("login_current_url", request.getHeader("Referer"));
		weibo4j.Oauth oauth = new weibo4j.Oauth();
		String url = oauth.authorize("code");
		logger.info("新浪微博登录界面，重定向至:"+url);
        return "redirect:" + url;
	}
	
代码片段中的session是为了获取用户登录前所在页面URL，方便登录完后重定向到登录之前的页面。其中url是新浪微博登录界面网址，我们只需要重定向过去就行了。

当用户在新浪微博登录成功后，会重定向到我们刚才填写的redirect_URI中，如我填写的 http://xxx.xxx.xxx.xx/api/weibo/login1，对应逻辑代码片段如下：

.. code-block:: java

  /**
     * 
     * 新浪微博登录操作
     * 
     * @param session
     *  @return
     * @throws WeiboException
     */
    @RequestMapping(value = "/weibo/login2", method = RequestMethod.GET)
    public String loginSinaWeiboAction(HttpSession session,
            @RequestParam String code) throws WeiboException {
        String url = (String) session.getAttribute("login_current_url");
        session.removeAttribute("login_current_url");
        User user = sinaWeiboLoginAction(code,
                (User) session.getAttribute("user"));
        if (null != user) {
            session.setAttribute("user", user);
        }
        logger.info("新浪微博登录操作，重定向至:"+url);
        return "redirect:/api/zhongjulin";
    }
    
重定向过来会携带code参数我们把值取到用来获取用户的资料。获取了code然后得到access_token就能操作API了

.. code-block:: java

   /**
     * 新浪微博操作
     * 
     * @param code
     * @param currentLoginUser
     *            当前登录用户，可为 null
     *  @return
     * @throws WeiboException
     */
    private User sinaWeiboLoginAction(String code, User currentLoginUser)
            throws WeiboException {
        weibo4j.Oauth oauth = new weibo4j.Oauth();
        weibo4j.http.AccessToken accessToken = oauth.getAccessTokenByCode(code);
        String uid = accessToken.getUserUid();
        weibo4j.Users users = new weibo4j.Users(accessToken.getAccessToken());
        weibo4j.model.User user = users.showUserById(uid);
        String userDomain = user.getUserDomain(); // 用户登录名
        String c = user.getScreenName(); // 用户呢称
        String avatar = user.getAvatarLarge(); // 用户头像
        String gender = null; // 性别
        if ("m".equals(user.getGender())) {
            gender = "femal";
        } else if ("f".equals(user.getGender())) {
            gender = "male";
        } else {
            gender = "未知";
        }
        logger.info("userDomain: "+userDomain+"ScreenName: "+c);
        // …… 业务逻辑操作，代码略
        return currentLoginUser;
    }
    
其中String uid = accessToken.getUserUid();

getUserUid()方法本身是没有的，我们需要修改新浪微博的源代码，不然取uid非常麻烦。

编辑/src/weibo4j.http/AccessToken.java，在：

.. code-block:: java

   public String getRefreshToken() {
    return refreshToken;
   }

下面添加：


.. code-block:: java

  public String getUserUid() {
    return uid;
  }