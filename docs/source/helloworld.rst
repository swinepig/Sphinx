This is a Title
===============
That has a paragraph about a main subject and is set when the '='
is at least the same length of the title itself.

Subject Subtitle
----------------
Subtitles are set with '-' and are required to have the same length 
of the subtitle itself, just like titles.

Lists can be unnumbered like:

 * Item Foo
 * Item Bar

Or automatically numbered:

 #. Item 1
 #. Item 2


代码区域
--------

::

   redis> RPUSH numbers 3 1 2
   (integer) 3

   redis> SORT numbers
   1) "1"
   2) "2"
   3) "3


表格
----

=====  =====  =======
A      B      A and B
=====  =====  =======
False  False  False
True   False  False
False  True   False
True   True   True
=====  =====  =======

指令
----

:dudir:`attention`, :dudir:`caution`, :dudir:`danger`, :dudir:`error`, :dudir:`hint`, :dudir:`important`, :dudir:`note`, :dudir:`tip`, :dudir:`warning`

语法产品
--------
.. productionlist::
   try_stmt: try1_stmt | try2_stmt
   try1_stmt: "try" ":" `suite`
            : ("except" [`expression` ["," `target`]] ":" `suite`)+
            : ["else" ":" `suite`]
            : ["finally" ":" `suite`]
   try2_stmt: "try" ":" `suite`
            : "finally" ":" `suite`

尾注
----

Lorem ipsum [#1]_ dolor sit amet ... [#2]_

.. rubric:: Footnotes

.. [#1] 第一条尾注的文本.
.. [#2] 第二条尾注的文本.
 