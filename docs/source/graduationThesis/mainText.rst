Fibonacci数与黄金分割比
======================

**摘要：**  `黄金分割在自然科学和社会科学研究中有着广泛的意义,它是自然界中诸多事物呈现的一种美妙形式,同时也是从古到今始终被美学家作为形式美的一条法则。Fibonacci数列是由养兔问题导出的看似一种简单的数列,但是由于该数列的一些内部结构和它与黄金分割比的关系,已经越来越多的被人们所研究，且它的越来越多的应用被人们找到，这引起数学家的极大关注。本文首先引入黄金分割比和Fibonacci数列这两个概念及对Fibonacci数列若干重要性质的讨论，然后通过迭代法和特征方程求Fibonacci数列通项公式等方法对黄金分割比和Fibonacci数列进行分析和比较，引出这两个数学概念之间的关系，并对Fibonacci数列的Binet公式，矩阵表达式的推求进行初步探讨。最后在对Fibonacci数列一系列应用的介绍和其研究现状的分析下对Fibonacci数列进行推广，并给出通过 MATLAB 编程实现的求解 Fibonacci 数列和黄金分割比的方法。`

**关键词：** Fibonacci数列；黄金分割; MATLAB

Fibonacci Numbers And Golden Ratio
----------------------------------

**Abstract：** The ratio of the Golden Section has comprehensive meanings in nature and society, which can be found ubiquitously in the natural structures. It has always been a rule of beauty of form by estheticians since ancient times. As more and more natures of Fibonacci sequence are discovered by people and more and more applications are found by people, this caused great concern to mathematicians. In this thesis, we first introduce two basic concepts, the golden ratio and Fibonacci sequence, and investigate Fibonacci sequence's important properties. After analyzing the properties of the Golden ratio and Fibonacci sequence, we compare Golden ratio with Fibonacci sequence by methods of the iterative method and the characteristic equation to solve general formulas of Fibonacci sequence to elicit the relationship between the two mathematical concepts. Then we turn to the derivation of Fibonacci sequence's Binet formula and matrix expression. Finally, we introduce some of the Fibonacci sequence's applications and summarize Fibonacci sequence's research status to promote the Fibonacci sequence and give the methods to solve the Fibonacci sequence and golden ratio through MATLAB programming. 
       
**Keywords：** Fibonacci Numbers ;  Golden Ratio;  MATLAB 

引言
----

意大利数学家Fibonacci（Fibonacci L）在1202年写成的《计算之书》中，提出了养兔问题：

`如果每一对成兔每月生一对幼兔，幼兔经过二个月后成为成兔，即开始繁殖，试问年初的一对幼兔一年后能繁殖成多少对兔子(假定不发生死亡)？`

该问题一直以来都受到人们的关注，引起后人对该问题以及由此引出的相关问题的源源不断地兴趣，八百多年以来人们对它的研究一直没有间断，如今该问题仍充满着现代活力，著名的国际杂志<<Fibonacci Quarterly>>就是专门刊登各种与Fibonacci数相关的数学论文。经过数学家们的研究序列的性质不断地被挖掘出来，有关它的应用也越来越广泛，其中涉及自然科学和社会科学等各种领域。 早期的研究主要是基于序列本身的各种性质进行，例如给出Fibonacci序列满足的各种恒等式、序列的各种表达形式和序列通项的一般形式。如今对于Fibonacci数的研究已经不再仅仅局限在序列的性质进行研究，更广泛的应用于数论、代数、组合与图论、计算机科学等数学分支，乃至生物学、物理学等各个方面。本文不仅将对其Binet公式，矩阵表达式的推求进行初步探讨，具体展现它在黄金分割比（Golden Ratio）计算中的应用，特别是对Fibonacci数列进行推广，得到一些新的结果，最后给出通过MATLAB编程实现的求解Fibonacci数列和黄金分割比的方法。

本文结构如下：全文共分为四个部分。第一部分为预备知识，主要介绍Fibonacci数列的基本定义和性质，黄金分割定义，Fibonacci数列的通项公式计算，以及Fibonacci数列binet公式和矩阵表达式的发现和推导；第二部分为Fibonacci数列的研究现状与应用，介绍了当前Fibonacci数列的研究现状和在优先发和自然科学上的应用；第三部分主要对Fibonacci数列的推广；第四部分为Fibonacci数列和黄金分割比的MATLAB的实现。


1 预备知识
----------

1.1 Fibonacci数列及其性质
^^^^^^^^^^^^^^^^^^^^^^^^^

十三世纪，意大利数学家Fibonacci提出了“兔子问题”：有一个人把一对兔子放在四面围着的地方，想要知道一年后有多少对兔子生出来。假定每个月一对兔子生下另外一对。而这新的一对在二个月后就生下另外一对，问第n个月时共有多少对兔子？

我们以 :math:`U _n` 表示第n个月时兔子的总对数，经过简单计算可知， :math:`U _n` 前几项如下：

+-----------+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
|   月份 n  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |  8  |  9  |  10 |  11 |  12 |  13 |  14 |  15 |  16 |  17 |  18 |
+===========+=====+=====+=====+=====+=====+=====+=====+=====+=====+=====+=====+=====+=====+=====+=====+=====+=====+=====+
|:math:`U_n`|  1  |  1  |  2  |  3  |  5  |  8  |  13 |  21 |  34 |  55 |  89 | 144 | 233 | 377 | 610 | 978 | 1588| 2566|
+-----------+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+

显然，通过以上表格可推出如下一般递推关系式：

     :math:`F_0 = 1,F_1 = 1,\cdots,F_n = F_{n-1} + F_{n-2},n \geq 2`

满足以上递归关系的数列被称为Fibonacci数列。

**性质l**   Fibonacci数 :math:`F_n` 可以表示为二项式系数之和，即：

     :math:`F_n = \binom{n}{0} + \binom{n-1}{0} + \cdots + \binom{n-k}{0}` ,其中, :math:`k =\left[ \frac{n}{2} \right]`

证明：当 :math:`k >\left[ \frac{n}{2} \right],\text{有} n-k < k,` 即。。所以只需证明下面的等式成立即可：

     :math:`F_n = \binom{n}{0} + \binom{n-1}{0} + \cdots + \binom{n-k}{0} + \cdots + \binom{n}{0}`

下面用归纳法证明：

当 :math:`n=0` 时，有 :math:`F_0 = \binom{0}{0} = 1` 成立。假设对 :math:`0,1,2 \cdots ,n` 等式都成立，则有:

.. math::

  \begin{eqnarray*}
  F_{n+1} & = & F_{n+1} + F_{n-1} \\
  & = & \left[ \binom{n}{0} + \binom{n-1}{1} + \cdots + \binom{0}{n} \right] + \left[ \binom{n-1}{0} + \binom{n-2}{1} + \cdots + \binom{0}{n-1} \right] \\
  & = & \binom{n}{0} + \left[ \binom{n-1}{1} + \binom{n-1}{0} \right] + \left[ \binom{0}{n} + \binom{0}{n-1} \right] \\
  & = & \binom{n+1}{0} + \binom{n}{1} + \cdots + \binom{1}{n} + \binom{0}{n+1} \\
  \end{eqnarray*}
 
由归纳法，命题成立。

**性质2**  :math:`F_0 + F_1 + \cdots + F_n =  F_{n+2} - 1`

证明：由递推关系得：

     :math:`F_0 =F_2 - F_1,F_1 =F_3 - F_2, \cdots ,F_n =F_{n+2} - F_{n+1}` 
     
把以上各式的左边和右边分别相加，可得：

     :math:`F_0 + F_1 + \cdots + F_n =  F_{n+2} - 1`
     
**性质3**  :math:`F_0 + F_1 + \cdots + F_{2n} =  F_{2n+2}`

证明：由递推关系得：

     :math:`F_0 =F_1,F_2 =F_3 - F_1, \cdots ,F_{2n} =F_{2n+1} - F_{2n-1}` 
     
把以上各式的左边和右边分别相加，得：

     :math:`F_0 + F_2 + \cdots + F_{2n} =  F_{2n+1}`
     
     
1.2 黄金分割
^^^^^^^^^^^^

“黄金分割”( Golden Section)相传是由公元前 6世纪古希腊哲学家、数学家毕达哥拉斯( Pythagoras)及其学派发现的。欧几里德( Euclid)的名著《几何原本》第二卷是述说毕氏学派著述的,由14个命题组成 ,包含论线段计算的恒等式、黄金分割、勾股定理推广等。其中第十一节写道: “以点 H按中末比截直线AB ,使成黄金分割 ,即 :math:`AB∶AH = AH∶HB` ”。《几何原本》中还给出了求黄金比的五种方法。

若设  :math:`AB = 1,AH = x, \text{则上面等式变为} 1\cdot x = x\cdot ( 1 - x ),\text{即} x^2 = 1\cdot( 1 - x ),` 整理得一元二次方程 :math:`x^2 + x -1 = 0,` 解之得  :math:`x = \frac{\sqrt{5}-1}{2} \approx`  0.618，H即为线段AB的黄金分割点。0. 618 叫做“黄金数”记为 :math:`W= \frac{\sqrt{5}-1}{2}`  。一般地 ,把长为L 的线段分成两部分 ,使其中较长部分等于较短部分和全部的比例中项,即 :math:`X : L = (L - X ) : X,X \approx 0.618L,`  这样的分割称为“黄金分割”。古希腊著名哲学家柏拉图(Platon)将其命名为“黄金比” 。

1.3 Fibonacci数列和黄金分割比的关系
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

因为任何无理数都可用有理数逼近。现在我们试图找到一串分数列 :math:`\frac{a_n}{b_n}(n = 1,2,3\cdots)` 使得  :math:`\lim\limits_{x \to \infty} \frac{a_n}{b_n} = W,\text{且} \frac{a_n}{b_n}`  是所有分母小于或等于 的分数中最接近于W的。

我们用一种近似方法——迭代法来确定黄金数W的二次方程式 :math:`f(x) = x^2 + x -1 = 0`

将 :math:`x^2 + x -1 = 0`  改写成迭代方程 :math:`x = \frac{1}{1+x},`  易知所求根在区间  :math:`(0,1)` 内，迭代函数 :math:`g(x) = \frac{1}{1+x},g^\prime = - \frac{1}{(1+x)^2}` 在区间  :math:`(0,1)` 上恒有 :math:`|g^\prime(x)| < 1` 。因此迭代公式 :math:`x_{n+1} = \frac{1}{1 + x_n}`  对任意初始值  :math:`x_0 \in (0,1)` 均收敛于方程的根 :math:`x^*` 。

  取初始值 :math:`x_0 = 1` ，可得  :math:`x^*` 的一列近似值。

=====  =========================  =====  ===========================  ======  ===========================
n      :math:`x_n`                n      :math:`x_n`                  n       :math:`x_n`
=====  =========================  =====  ===========================  ======  ===========================
1      :math:`\frac{1}{2}=0.5`    4      :math:`\frac{5}{8}=0.625`    7       :math:`\frac{21}{34}=0.617`
2      :math:`\frac{2}{3}=0.666`  5      :math:`\frac{8}{13}=0.615`   8       :math:`\frac{34}{55}=0.618`
3      :math:`\frac{3}{5}=0.6`    6      :math:`\frac{13}{21}=0.619`  ...     ...
=====  =========================  =====  ===========================  ======  ===========================

  :math:`{x_n}` 就是 :math:`x^*` 的一个渐进分数列，且具有以下规律：

  设  :math:`F_1 = F_2 = 1,F_3 = F_2 + F_1, \cdots, F_{n+2} = F_{n+1} + F_n,(n \in N^*)`

  即  :math:`x_n = \frac{F_{n+1}}{F_{n+2}},n \in N^*` 。

  数列 :math:`F_n` 叫Fibonacci数列，现在利用Fibonacci数列的递推关系，来求 :math:`F_n` 的通向公式。

由递推关系  :math:`F_{n+2} = F_{n+1} + F_n,` 得特征方程 :math:`x^2 + x -1 = 0,` 求得特征根 :math:`x_{1,2} = \frac{1 \pm \sqrt{5}}{2},` 得通项公式 :math:`F_n = C_1(\frac{1+\sqrt{5}}{2})^n + C_2(\frac{1-\sqrt{5}}{2})^n,` 代入初始条件  :math:`F1=F2=1,` 解得  :math:`C_1 = -C_2 = \frac{1}{\sqrt{5}},` 得到Fibonacci数列的通项公式 :math:`F_n = \frac{1}{\sqrt{5}} \left[(\frac{1+\sqrt{5}}{2})^n + (\frac{1-\sqrt{5}}{2})^n \right]`

   显然 :math:`\frac{1-\sqrt{5}}{2} = -W,\frac{1+\sqrt{5}}{2} = W^{-1},` W为黄金分割数。

   这是黄金分割和Fibonacci数列在形式上的联系。

**定理 1**  :math:`\lim\limits_{x \to \infty}\frac{F_n}{F_{n+1}}=W`

可见分数列 :math:`{x_n}` 收敛且 :math:`\lim\limits_{x \to \infty}x_n = W,` 黄金分割和Fibonacci数列的联系更加紧密了。


1.4 Fibonacci数列通项公式的计算方法
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1.4.1 Fibonacci数列的Binet公式的发现与推导
""""""""""""""""""""""""""""""""""""""""""

  从递推式的结构特征入手首先考察递推式：

.. math:: u_{n+2} = u_{n+1} + u_n

对于等式 :math:`(3.2),` 常常可以从它的一些变式入手，来发现它的结构特征．
  
注意到 :math:`(3.2)` 是线性关系式，对于满足  :math:`(3.2)` 的任意两个数列 :math:`{a_n}、{b_n},` 以及任意常数a,b，因  :math:`a \cdot a_{n+2} + b \cdot b_{n+2} = a(a_{n+1} + a_n) + b(b_{n+1} + b_n) = ( a \cdot a_{n+1} + b \cdot b_{n+1}) + ( a \cdot a_n + b \cdot b_n),` 所以数列也满足  :math:`(3.2)` 式．这说明，从数学结构来看，所有符合  :math:`(3.2)` 式的数列的集合构成一个加群．

接着，从熟悉的数列入手寻找符合 :math:`(3.2)` 式的数列．先考察等差数列 :math:`a_n = kn + b.` 代入 :math:`(3.2)` 式，有 :math:`k(n+2) + b = k(n+1) + b + kn + b,` 即  :math:`a_n = kn + b,` 由 :math:`n` 的任意性
得知  :math:`k = b = 0,` 即 :math:`a_n = 0,` 但它不符合初始条件  :math:`u_0 = 1,u_1 = 1` ，故所有等差数列均不符合。

再来考察等比数列 :math:`a_n = a_1 q^{n-1}` (其中 :math:`a_1,q` 均为不等于零的常数)。代入 :math:`(3.2)` 式，得  :math:`a_1 q^{n+1} = a_1 q^n + a_1 q^{n-1},` 即 :math:`q^2 - q -1 =0,` 解得  :math:`q = \frac{1-\sqrt{5}}{2}.`  为方便起见，记  :math:`a = \frac{1+\sqrt{5}}{2},b = \frac{1-\sqrt{5}}{2}` (以下同)．这样等比数列 :math:`a_n = a_1 a^{n-1} \text{与} b_n = b_1 b^{n-1}` 符合 :math:`(3.2)` 式。
	
最后，兼顾初始条件  :math:`u_0 = 1,u_1 = 1, u_n` 必须要有两个自由待定的常数，故可设  :math:`u_n = a_n + b_n = a_1 a^{n-1} + b_1 b^{n-1}` 将 :math:`u_0 = 1,u_1 = 1` 代入,求出  :math:`a_1,b_1` 便可得Fibonacci数列的Binet公式:
 .. math:: u_n = \frac{1}{\sqrt{5}} \left[(\frac{1+\sqrt{5}}{2})^{n+1} + (\frac{1-\sqrt{5}}{2})^{n-1} \right]
 

1.4.2 Fibonacci数列矩阵表达式的发现与推导
""""""""""""""""""""""""""""""""""""""""

对:math:`(3.2),` 式 :math:`u_{n+2} = u_{n+1} + u_n` 进行整体考虑．如果把  :math:`u_{n+2},u_{n+1};u_{n+1},u_n,` 每两项看成一个量，则它们不但是相邻的，而且在此又包含了递推式 :math:`u_{n+2} = u_{n+1} + u_n` 中的三项．由此想到，把相邻的两项看作一个二元
列向量  :math:`\binom{u_{n+2}}{u_{n+1}} \text{与} \binom{u_{n+1}}{u_n}.` 这时，问题的关键在于寻找 :math:`\binom{u_{n+2}}{u_{n+1}}`  与 :math:`\binom{u_{n+1}}{u_n}` 的递推关系。受矩阵乘
法  :math:`\begin{pmatrix} a & b\\ c & d \end{pmatrix} \begin{pmatrix} x\\ y \end{pmatrix} = \begin{pmatrix} ax + by\\ cx+dy \end{pmatrix}` 的启发，
:math:`\begin{equation}
\left(
\begin{array}{cccccc}
0 & 1 &  &  &  & \text{\Huge$0$} \\
1 & 0 & 1 &  &  &  \\
& 1 & \ddots & \ddots &  &  \\
&  & \ddots & \ddots & \ddots &  \\
&  &  & \ddots & \ddots & 1 \\
\text{\Huge$0$} &  &  &  & 1 & 0 \\
\end{array}
\right)
\end{equation}`
