部分语法
========

.. _my-reference-label:

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


需引用自身, 查看 :ref:`my-reference-label`.


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
	
利用 ``CSS`` 计数器为非内联公式加入编号。以下为修改 ``CSS`` 样式:

.. code-block:: css

   body {
     counter-reset:section 0;
   }
   
   div.body h2:before {
     content:"";
     counter-increment:section;
   }

   div.body h2 {
     background-color: #ffffff;
     margin-top: 60px;
     /* background-color: #8A7DB3; */ 
     color: #0c3762;
     border-bottom:
     dotted thin #CFC8C8;
     counter-reset:section;
   }
 
   div.math:before {
     counter-increment:equation;
     content:"(" counter(section) "." counter(equation) ")";
     float:right;
   }

.. code-block:: ruby

   Some Ruby code.
    
 	
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
 
