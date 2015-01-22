部分语法
========


列表
----

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

尾注
----

Lorem ipsum [#]_ dolor sit amet ... [#]_

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

.. note:: 
   note注意

.. warning::
   warning警告
   
.. danger::
   danger危险



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


函数
----

.. py:function:: format_exception(etype, value, tb[, limit=None])

   Format the exception with a traceback.

   :param etype: exception type
   :param value: exception value
   :param tb: traceback object
   :param limit: maximum number of stack frames to show
   :type limit: integer or None
   :rtype: list of strings
   
   
数学
----
MathJax开发文档:

 * `中文 <https://mathjax-chinese-doc.readthedocs.org/en/latest/>`_
 * `PDF <https://media.readthedocs.org/pdf/mathjax/v2.2-latest/mathjax.pdf/>`_
 
`LaTeX在线编辑器 <http://zh.numberempire.com/texequationeditor/equationeditor.php/>`_
 	
.. math::

   (a + b)^2 = a^2 + 2ab + b^2

   (a - b)^2 = a^2 - 2ab + b^2
   
.. math::

   (a + b)^2  &=  (a + b)(a + b) \\
              &=  a^2 + 2ab + b^2

.. math:: (a + b)^2 = a^2 + 2ab + b^2

.. math::
   :nowrap:

   \begin{eqnarray}
      y    & = & ax^2 + bx + c \\
      f(x) & = & x^2 + 2xy + y^2
   \end{eqnarray}
   
.. math:: e^{i\pi} + 1 = 0
   :label: euler
          
Euler's identity, equation :eq:`euler`, was elected one of the most
beautiful mathematical formulas.

.. math::

   \iint\limits_{{D_1}} {(\frac{{\partial Q}}{{\partial x}} - \frac{{\partial P}}{{\partial y}})}dxdy = \oint_{AB} {Pdx + Qdy} 
   
.. rubric:: Footnotes

.. [#] 第一条尾注的文本.
.. [#] 第二条尾注的文本.
 