Seam pages.xml
=================


Overview: What is pages.xml?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The pages.xml file and any .page.xml file is Seam's way of describing:

 * RESTful (non-Faces) pages - That is, what to do with the URL parameters for a GET request.
 * View restrictions - Restrict users from viewing pages based on an EL expression.
 * Page actions - Invoke EL expressions whenever a page is accessed (RESTful or not).
 * Page flow - The Seam <navigation> elements can replace the ordinary JSF navigation rules.


Global pages.xml file
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The global pages.xml file can be used to specify the settings for the entire application, or just those views / exceptions that are not handled by a view specific .page.xml file. For very simple applications, or very small teams it can be convenient to specify everything in one file. However for larger applications where more than two developers are working in parallel, it is a good idea to give every view it's own .page.xml file, and leave the globally declared items in the pages.xml file.

Things that should be in the pages.xml file:

 * The <pages> element, of course. This tells Seam where to go if the user needs to log in, or if there is no conversation.
 * Exception handling - <exception> elements for exceptions that do not have Seam annotations.
 * actions that are to be applied to multiple views using wildcard view-ids.


Fine grained pages.xml - One XML file per page
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In an application with a lot of pages, pages.xml might get very large. Also, if the Seam-style navigation rules are being used then the pages.xml file might become a point of contention for developers working on the application. To mitigate this, you can define a page file for each view id by creating a view-id.page.xml for each view file, which Seam will look for as a resource.

See Seam-events-link

See the contactlist example.

Things that should be an a .page.xml file:

 * The root element will be <page>.
 
    * Make sure the view-id matches the URI of the page.
    * Use login-required to protect pages from anonymous viewing.
    
 * <restrict> expressions that allow the page to be viewed if the expressions evaluate to true.
 * <param> declarations for the page.
 * <action> declarations for the page.
 * <navigation> rules for the page (replaces ordinary JSF navigation).


DTD
^^^^^^^

The DTD declaration for version 1.2 looks like this:

.. code-block:: java

   <!DOCTYPE pages PUBLIC  "-//JBoss/Seam Pages Configuration DTD 1.2//EN"  "http://jboss.com/products/seam/pages-1.2.dtd">
   

Elements and attributes
---------------------------------


<pages>
^^^^^^^^^^^^^^

The <pages> element is the root of the pages.xml document. Seam will attempt load this file when it starts up, and if it doesn't find it it will assume some defaults. The <pages> element has a few attributes that define global behavior for the application:

=========================   ============================================  
     Attribute                           Description  
=========================   ============================================
no-conversation-view-id	     Where to go if there's no conversation.
login-view-id	               Where to go when the user isn't logged in.  
=========================   ============================================


<page>
^^^^^^^^^^^^^^

The <page> element defines the behavior of a specific view, and it can be nested in the <pages> element in the overall pages.xml file, or it can be inside a view specific .page.xml file (see this section for more). With the <page> element you can define:

 #. Security restrictions for the view, plus where to go when the user is not logged in.
 #. Request parameter processing (a little like outjection).
 #. An action that will be invoked just before the view is rendered.
 #. Navigation rules for the view, either mapping outcome strings to other view IDs (similar to JSF navigation rules) or EL expression evaluation.
 
The attributes for the <page> element are:

==================== ========================================================================================================================================================================================================================================================================
     Attribute                           Description  
==================== ========================================================================================================================================================================================================================================================================
view-id                   The relative URL of the page in the WAR.
login-view-id	            If true, a NotLoggedIn exception will be thrown if Identity.getInstance().isLoggedIn() returns false. Works well if the login-view-id attribute is defined on the <pages> element. This is appliedbefore the restrict expressions and before the page actions.
action                    An EL expression that evaluates to an action method that will be invoked just before rendering the page. (see <action>)
==================== ========================================================================================================================================================================================================================================================================


<param>
^^^^^^^^^^^^^^

This element specifies any parameter processing that should happen for GET requests. The EL values are set after the RESTORE_VIEW(1) phase during a GET request, right after the conversation is restored. The parameter values are converted and stored directly into the Seam components via EL, the usual JSF 'apply request values, update model values' isn't done here because there is no JSF component (view object) for these parameters.

====================   ====================================================================================================================================  
     Attribute                        Description  
====================   ====================================================================================================================================
       name                    The name of the request parameter (a.k.a. URL parameter)
       value	              An EL expression that will be set to the value of the request parameter. NOTE: This happens before any page action is invoked.
====================   ====================================================================================================================================

<begin-conversation>
^^^^^^^^^^^^^^^^^^^^^^^^^^

This will begin a new conversation, just like the @Begin annotation except it is done in the action phase.


<action>
^^^^^^^^^^^^

Page actions invoked before the RENDER_RESPONSE phase. This means that:

 #. For GET requests, the page parameters are applied before the page action is invoked.
 #. For JSF postback requests, the page action is invoked after the JSF action method.
 
====================  =========================================================================================================================================================================  
     Attribute                           Description  
====================  =========================================================================================================================================================================
       if	                    Optional EL expression that will cause the action to execute if it evaluates to true.
      execute              EL method expression that will be invoked before the page renders. See seam-page-actions. Note that the page parameters are applied before the action is invoked.  
====================  =========================================================================================================================================================================

<restrict>
^^^^^^^^^^^^

The <restrict> element specifies an EL expression that will be evaluated every time the page is accessed, much like the @Restrict annotation. If the expression returns false then an exception will be thrown which may be handled by an <exception> element.

For example:

.. code-block:: java

   <page view-id="/somepage.xhtml" login-required="true">         
   <restrict>#{mySeamComponent.ableToSeeSomePage}</restrict> 
   </page> 
   
This will invoke the isAbleToSeeSomePage() method on the component bound to the name mySeamComponent. Of course, you can use the Seam security methods or any EL expression. The Seam Pages component will throw an AuthorizationException, which can be handled using the <exception> element in the global pages.xml file like this:


.. code-block:: java

   <exception class="org.jboss.seam.security.AuthorizationException">         
   <end-conversation/>         
   <redirect view-id="/accessdenied.xhtml">             
   <message>You do not have the necessary security privileges to perform this action.</message>         
   </redirect>     
   </exception> 
   

.. note:: 
   <restrict> expressions are processed:
    * After <param> elements, because those are processed after the RESTORE_VIEW(1) phase.
    * After the login-required attribute is processed.
    * Before any page actions.



<description>
^^^^^^^^^^^^^^^^

This is the label that will be given to the long running conversation (if there is one) on the page. The label is what will show up in the conversation switcher's list of conversations. The description can contain EL expressions that will substitute in values that the end user can read.

Don't confuse the description of the conversation with the conversation id! They are not the same thing. You may want to even have the same conversation have different descriptions depending on what state of the page flow you are in. For example, a 4 page 'wizard' will have the same conversation and conversation id flow between pages, but the conversation description shown in the switcher should display the page number in the wizard (page 3 of 4).


<navigation>
^^^^^^^^^^^^^^^^

Seam also allows you to specify navigation rules in pages.xml. This can be more convenient than specifying navigation in the typical JSF way.

Take the following JSF navigation rule, for example:

.. code-block:: java

    <navigation-rule>         
    <from-view-id>/pagewithlink.xhtml</from-view-id>  (1)        
    <navigation-case>             
    <from-outcome>first</from-outcome>            (2)             
    <to-view-id>/first.xhtml</to-view-id>         (3)             
    <redirect/>                                   (4)         
    </navigation-case>     
    </navigation-rule> 
    
 * The view id of the page that produces the outcome.
 * The outcome id.
 * The destination view.
 * Optional redirect tag for Redirect-after-post.
 
Using Seam, this can be represented in pages.xml as:

.. code-block:: java

    <page view-id="/pagewithlink.xhtml">       (1)     
    <navigation>       <rule if-outcome="first">              (2)         
    <redirect view-id="/first.xhtml"/>   (3)       
    </rule>     
    </navigation>   
    </page>
    
 * The view id of the page that produces the outcome.
 * The outcome id is specified using <rule if-outcome="...">.
 * The destination is a redirect element in this case. 
 
Not only is this more compact than the JSF way, it is also possible to eliminate the outcome strings from the application and replace them with EL expressions using <rule if="... EL expr"> syntax:

.. code-block:: java

   <page view-id="/pagewithlink.xhtml">       (1)     
   <navigation>       <rule if="#{theSfsb.goodToGo}">        (2)        
   <redirect view-id="/first.xhtml"/>   (3)       
   </rule>     
   </navigation>   
   </page> 
   
 * The view id of the page that produces the outcome.
 * Instead of specifying an outcome string, we use an EL expression to invoke a method on a SFSB which will return a boolean.
 * The destination is the same redirect element.
 
 
 
<exception>
^^^^^^^^^^^^^^^^

The <exception> element tells Seam what to do if a particular exception is thrown from the application. It works a bit like a set of catch clauses in that the <exception> elements are processed in order and Seam will use the first match. So, you must put the most specific exception classes first just like catch.

Here are some typical exceptions:

.. code-block:: java

   <exception class="org.jboss.seam.security.NotLoggedInException">         
   <redirect view-id="/accessdenied.xhtml">             
   <message>You must be logged in to perform this action</message>         
   </redirect>     
   </exception>      
   <exception class="org.jboss.seam.security.AuthorizationException">         
   <end-conversation/>                                                                  (1)         
   <redirect view-id="/accessdenied.xhtml">             
   <message>You do not have the necessary privileges to perform this action.             
   </message>         
   </redirect>     
   </exception>      
   <exception class="javax.persistence.PersistenceException">         
   <redirect view-id="/error.xhtml">             
   <message severity="ERROR">                                                       (2)            
   Database access failed: #{handledException.message}                              (3)             
   </message>         
   </redirect>     
   </exception>      
   <exception class="javax.servlet.ServletException">         
   <redirect view-id="/error.xhtml">             
   <message severity="WARN">Unexpected error: #{handledException.message}
   </message>         
   </redirect>     
   </exception>      
   <exception>         
   <redirect view-id="/error.xhtml">             
   <message severity="WARN">Unexpected error: #{handledException.message}
   </message>         
   </redirect>     
   </exception> 
   
 * You can force Seam to end the current conversation with the <end-conversation/> element.
 * The severity level of the Faces message can be set using the severity attribute.
 * Note that you can use EL in the message, and that there is a 'handledException' context variable set to the actual exception.
 
 
<redirect>
^^^^^^^^^^^^^^^^

The <redirect> element can be used inside navigation rules and exception handling rules. This causes JSF to redirect to the specified view id.

Example:

.. code-block:: java

   <redirect view-id="/some-other-view.xhtml"/> 
   
   
Things to watch out for...
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

 * To keep things consistent use only one method of specifying page flow, do not mix Seam style navigation rules and JSF style navigation rules.
 * Don't map the same view with fine graned .page.xml files and global pages.xml! This can cause hours of head-scratching and wondering why <param> elements are not working.
 * Make sure the view-id matches the URI for the page when using .page.xml files! It's a little redundant to specify the view id, but if you get it wrong very strange things will happen.
 * Make sure that <param> expressions do not rely on any side effects of page actions or <restrict> expressions. Page parameters are processed right at the beginning of the JSF Lifecycle, before most other Seam page processing. For example, don't count on <restrict> or login-required to cause a redirect before the params are processed.
 * <begin-conversation/> can create lots of [`Abandoned Conversations`]! - Using <begin-conversation/> without join="true" in page.xml will create a new [`Long Running Conversation`] on each request. This may even appear to propagate values from page to page, but that is just due to rendering the values on the screen and then reading them back into the new conversation.
