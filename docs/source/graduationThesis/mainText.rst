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

对  :math:`(3.2),` 式 :math:`u_{n+2} = u_{n+1} + u_n` 进行整体考虑．如果把  :math:`u_{n+2},u_{n+1};u_{n+1},u_n,` 每两项看成一个量，则它们不但是相邻的，而且在此又包含了递推式 :math:`u_{n+2} = u_{n+1} + u_n` 中的三项．由此想到，把相邻的两项看作一个二元
列向量  :math:`\binom{u_{n+2}}{u_{n+1}} \text{与} \binom{u_{n+1}}{u_n}.` 这时，问题的关键在于寻找 :math:`\binom{u_{n+2}}{u_{n+1}}`  与 :math:`\binom{u_{n+1}}{u_n}` 的递推关系。受矩阵乘
法  :math:`\begin{pmatrix} a & b\\ c & d \end{pmatrix} \begin{pmatrix} x\\ y \end{pmatrix} = \begin{pmatrix} ax + by\\ cx+dy \end{pmatrix}` 的启发，
:math:`\begin{pmatrix} u_{n+2}\\ u_{n+1} \end{pmatrix} = \begin{pmatrix} u_{n+2} + u_n\\ u_{n+1} \end{pmatrix} = \begin{pmatrix} 1 \times u_{n+1} + 1 \times u_n\\ 1 \times u_{n+1} + 0 \times u_n \end{pmatrix} = \begin{pmatrix} 1 & 0\\ 0 & 1 \end{pmatrix} \begin{pmatrix} u_{n+1}\\ u_n \end{pmatrix}`

.. math::

   \begin{pmatrix} u_{n+1}\\ u_n \end{pmatrix} = \begin{pmatrix} 1 & 1\\ 1 & 0\end{pmatrix}^n \begin{pmatrix} u_1\\ u_0 \end{pmatrix} = \begin{pmatrix} 1 & 1\\ 1 & 0\end{pmatrix}^n \begin{pmatrix} 1\\ 1 \end{pmatrix}
   
这就是Fibonacci数列的矩阵表达式．

通过  :math:`(3.4)` 式，要求出  :math:`{u_n}` 的通项表达式，关键在 :math:`\begin{pmatrix} 1 & 1\\ 1 & 0\end{pmatrix}^n` 关于n的表达式，为此利用哈密尔顿定理：若  :math:`f(\lambda)` 是K阶方阵A的特征方程，则 :math:`f(A)=0` (0为K阶零方阵)．

考察  :math:`A=\begin{pmatrix} 1 & 1\\ 1 & 0\end{pmatrix},`  它的特征方程 :math:`f(\lambda)=|\lambda I - A| = \begin{vmatrix} \lambda-1 & -1\\ -1 & \lambda\end{vmatrix} = \lambda^2 - \lambda -1 = 0,` 其跟为 :math:`a = \frac{\sqrt{5} + 1}{2},b = \frac{\sqrt{5} + 1}{2}.`
则 :math:`f(A) = A^2 - A - I = 0 \text{(0和I分别为2阶零矩阵与单位矩阵)。}`

设  :math:`\lambda^2 = g(\lambda)(\lambda^2 - \lambda - 1) + p\lambda + q,\text{则} A^n = pA + qI,` 把  :math:`a,b` 代入上式，得  :math:`a^n = pa +q,b^n = pb +q,` 解得  :math:`p = \frac{a^n - b^n}{a-b},q = \frac{ab^n - ba^n}{a-b},`
:math:`A^n = pA + qI = \begin{pmatrix} 1 & 1\\ 1 & 0\end{pmatrix} + \frac{ab^n-ba^n}{a-b} \begin{pmatrix} 1 & 0\\ 0 & 1\end{pmatrix} = \begin{pmatrix} \frac{ab^{n+1}-b^{n+1}}{a-b} & \frac{a^n-b^n}{a-b} \\ \frac{a^n-b^n}{a-b} & \frac{ab^n-ba^n}{a-b} \end{pmatrix}`  所以
:math:`\begin{pmatrix} u_{n+1}\\ u_n\end{pmatrix} = \begin{pmatrix} 1 & 1\\ 1 & 0\end{pmatrix}^n \begin{pmatrix} 1\\ 1\end{pmatrix} = \begin{pmatrix} \frac{ab^{n+1}-b^{n+1}}{a-b} & \frac{a^n-b^n}{a-b} \\ \frac{a^n-b^n}{a-b} & \frac{ab^n-ba^n}{a-b} \end{pmatrix} \begin{pmatrix} 1\\ 1\end{pmatrix} =\begin{pmatrix} \frac{a^{n+2}-b^{n+2}}{a-b} \\ \frac{a^{n+1}-b^{n+1}}{a-b} \end{pmatrix}` 由此
可得, :math:`u_n = \frac{a^{n+1} - b^{n+1}}{a-b} = \frac{1}{\sqrt{5}} \biggl[(\frac{1+\sqrt{5}}{2})^{n+1} + (\frac{1-\sqrt{5}}{2})^{n-1} \biggl]`

2	Fibonacci数列的研究现状与应用
-------------------------------

2.1 Fibonacci数列的研究现状
^^^^^^^^^^^^^^^^^^^^^^^^^^^

对于Fibonacci数的研究已经不再仅仅局限在针对上述序列的性质进行研究，而是已经扩展到研究广义Fibonacci序列、Fibonacci多项式、Fibonacci行列式、Fibonacci三角形等等。并将之应用于数论、代数、组合与图论、计算机科学等数学分支，乃至生物学、物理学等各个方面。

赵秀梅、赵宗昌对Fibonacei数列的应用进行了研究 [10]_ ，并介绍了经典递推关系—Fibonacci数列的问题的由来、数列描述以及Fibonacci数列关系的各种求解方法，并以难易程度不同的实例为基础，详细分析了Fibonacci数列在具体问题中的应用。同时从算法复杂度的角度出发，重点阐述了在编程求解的过程中灵活、恰当地运用Fibonacci数列关系在提高程序执行效率、编码效率方面的重要性，突出了Fibonacci数列关系的研究价值、应用价值以及应用技巧。

1994年陈计先生对Fibonacci三角形介绍了如下猜想 [12]_ :不存在第 :math:`\prod` 型的Fibonacci三角形，即当 :math:`1 \leq k \leq n` 时,不存在以  :math:`F_{n-k},F_n,F_n` 为边长的Fibonacci三角形。(注: :math:`F_n`  是Fibonaeci数，满足关系式： :math:`F_0=0,F_1=1,F_{n+1} = F_n + F_{n-1},n = 1,2 \dotsc ;` 边长为Fibonacci数，面积为整数的三角形称为Fibonacci三角形。)

Shai在((Suppose more rabbits arebom》一文中，将古典的Fibonacci数列进行推广 [3]_ ，一对幼兔经过一个月成为成兔，每对成兔每个月生q对幼兔。即对成兔每月所生的幼兔的对数进行推广。这个结果将是一个非常有趣的数列。利用图1说明每月所生幼兔对数为q=2每月兔子对数情况。称此数列为“Beta-nacci”数列，它记录了每月新生幼兔的对数与前期所有兔子对数的和。即得相邻项兔子对数的数值关系式为 :math:`B_n = B_{n-1} + 2B_{n-2}` 用同样
的方法推导出每次所生幼兔的对数分别为3、4、5和6的情况，分别称为Gamma-nacci数列、Delta-nacci数列、Epsi-nacci数列和Zeta-nacci数列。一般地，每对成兔每个月生q对幼兔的数列为Multi-nacci数列。


2.2 Fibonacci数列的应用
^^^^^^^^^^^^^^^^^^^^^^^

2.2.1	Fibonacci数列在优先法上的应用
""""""""""""""""""""""""""""""""""""

优选法中可利用Fibonacci数列，和0.618法不同之点在于它预先确定试验次数，下面分两种情况介绍其方法：

:math:`(a)` 所有可能试验数正好是某个 :math:`F_n`
  
这时两个试验点放在 :math:`F_{n-1}` 和  :math:`F_{n-2}` 两个分点上，如果  :math:`F_{n-1}` 分点比较好，则舍去小于  :math:`F_{n-1}` 的部分；如果  :math:`F_{n-2}` 点更好，则舍去大于  :math:`F_{n-1}` 的部分。在留下的部分共  :math:`F_{n-1}` 个分点，其中第  :math:`F_{n-2}` 和  :math:`F_{n-3}` 第二试验点，恰好有一个是刚才留下来的试验可以利用。

可见在 :math:`E` 个可能试验中，最多用疗  :math:`n-1` 次试验便可得到所求的极值点。
  
:math:`(b)` 利用Fibonacci数列进行优选不同于0.618法之点，还在于它适合于参数只能取整数数值的情况。如若可能试验的数目比  :math:`F_n` 小，但比  :math:`F_{n-1}` 大时，可以虚加几个点凑成 :math:`F_n` 个点，但新增加的点的试验不必真做，可认定比其他点都差的点来处理。


2.2.2	Fibonacci数列在自然科学的其他方面也有许多应用
""""""""""""""""""""""""""""""""""""""""""""""""""""

例如树木的生长，由于新生的枝条往往需要一段“休息”时间供自身生长，而后才能萌发新枝。所以株树苗在一段间隔，例如一年以后长出一条新枝，第二年新枝“休息”，老枝依旧萌发，此后，老枝与“休息”过一年的枝同时萌发，当年生的新枝则‘休息”。这样，一株树木各个年份的枝桠数，第一年它只有主干，第二年有2枝，第三年有3枝，然后是5枝，8枝，13枝，……，每年的分枝数正好是Fibonacci数，构成Fibonacci序列。

音乐中的许多现象，乃至许多伟大作品，都与Fibonacci序列相关。以最常用的八度体系与十二平均律为例，从自然七声音阶的同度到八度  :math:`( \text{简谱} 1 \quad 2 \quad 3 \quad 4 \quad 5 \quad 6 \quad 7 \quad i)` 共有8个音，从十二平均律的同度到八度  :math:`(1\#1 \quad 2\#2 \quad 3 \quad 4\#4 \quad 5\#5 \quad 6\#6 \quad 7 \quad i)` 共有13个音，它们恰是Fibonacci序列中的第六位数和第七位数。

3	Fibonacci数列的推广
---------------------

Fibonacci数列的一般项 :math:`F_n` 可表示为 :math:`F_n = \frac{1}{\sqrt{5}} \left[(\frac{1+\sqrt{5}}{2})^n + (\frac{1-\sqrt{5}}{2})^n \right],` 若考虑更为广泛的情况，可将递推关系  :math:`F_1 = F_2 =1,F_n = F_{n-1} +F_{n-2},(n >2)` 作如下推广

.. math:: F_n = \lambda F_{n-1} + \mu F_{n-2} 

式中， :math:`F_1,F_2` 已知; :math:`\lambda \text{和} \mu`  为2个常数。称满足关系式 :math:`(5.1)` 的数列为推广的Fibonacci数列。下面讨论如何求它的一般项 :math:`F_n.`

令  :math:`\rho` 为一个待定的常数，由 :math:`(5.1)` 得 

.. math:: F_n - \rho F_{n-1} = (\lambda - \rho)(F_{n-1} - \frac{\mu}{\rho - \lambda} F_{n-2})

若  :math:`(5.2)` 式等号左端与右端括号内式子具有类似的形式 ，则有 

.. math:: \rho = \frac{\mu}{\rho - \lambda} \text{或}  \rho^2 - \lambda \rho - \mu = 0

:math:`(5.3)` 式是关于  :math:`\rho` 的一元二次方程，现在对  :math:`(5.3)` 的判别式进行讨论．

:math:`1) \text{若} \Delta = \lambda^2 + 4\mu > 0,` 则 :math:`(5.3)` 式有相异的两实根 :math:`\rho_{1,2} = \frac{1}{2}(\lambda \pm \sqrt{\lambda^2+4\mu}),` 将 :math:`\rho_1` 代入 :math:`(5.2)` 得
  :math:`F_n - \rho_1 F_{n-1} =(\lambda - \rho_1)(F_{n-1} - \rho_1 F_{n-2})`  类似的有

  .. math::
  
     (\lambda - \rho_1)(F_{n-1} - \rho_1 F_{n-2}) = (\lambda - \rho_1)^2(F_{n-2} - \rho_1 F_{n-3})
     
     \cdots \cdots
     
     (\lambda - \rho_1)^{n-3}(F_3 - \rho_1 F_2) = (\lambda - \rho_1)^{n-2}(F_2 - \rho_1 F_1)
  
将上面的  :math:`n-2` 个式子相加，消去等号两端相同的项可得

.. math:: F_n - \rho_1 F_{n-1} =(\lambda - \rho_1)^{n-2}(F_2 - \rho_1 F_1)

同理

.. math:: F_n - \rho_2 F_{n-1} =(\lambda - \rho_2)^{n-2}(F_2 - \rho_2 F_1)

联立  :math:`(5.5) \quad (5.6)` 式，应用克莱姆法则，就得到 :math:`F_n` 的表达式
:math:`F_n = \frac{\begin{vmatrix} \rho_1 & (\lambda-\rho_1)^{n-2}(F_2-\rho_1 F_1)\\ \rho_2 & (\lambda-\rho_2)^{n-2}(F_2-\rho_2 F_1)\end{vmatrix}}{\begin{vmatrix} \rho_1 & 1\\ \rho_2 & 1\end{vmatrix}}` 由
于  :math:`\rho_1 + \rho_2 = \lambda,\rho_1\rho_2 = -\mu,` 故

.. math:: F_n = \frac{(\rho_1^{n-1} - \rho_2^{n-1} )F_2 + \mu(\rho_1^{n-2} - \rho_2^{n-2}F_1}{\rho_1 -\rho_2}

:math:`2) \text{若} \Delta = \lambda^2 + 4\mu = 0,` 则 :math:`(5.3)` 式有两相等的实根 :math:`\rho = \lambda \diagup 2,` 将 :math:`\rho` 代入 :math:`(5.2)` 得  :math:`F_n - \rho F_{n-1} = \rho(F_{n-1} - \rho F_{n-2})` 类似的有

  .. math::
  
     \rho(F_{n-1} - \rho F_{n-2}) = \rho^2(F_{n-2} - \rho F_{n-3})
     
     \cdots \cdots
     
     \rho^{n-3}(F_3 - \rho F_2) = \rho^{n-2}(F_2 - \rho F_1)
     
将上面的  :math:`n-2` 个式子相加，消去等号两端相同的项可得

.. math:: F_n = \rho^{n-1}F_1 + (n+1)\rho^{n-2}(F_2 - \rho F_1) = \rho^{n-2}[(n-1)F_2 - (n-2)\rho F_1]

:math:`3) \text{若} \Delta = \lambda^2 + 4\mu < 0,` 与情形 :math:`3)` 类似，:math:`(5.3)` 式有两个共轭的复数根 :math:`\rho \text{和} \bar{\rho}` 
而 :math:`F_n = \frac{\begin{vmatrix} \rho & (\lambda-\rho)^{n-2}(F_2-\rho F_1)\\ \bar{\rho} & (\lambda-\bar{\rho})^{n-2}(F_2- \bar{\rho} F_1)\end{vmatrix}}{\begin{vmatrix} \rho & 1\\ \bar{\rho} & 1\end{vmatrix}}` 由
于 :math:`\rho + \bar{\rho} = \lambda,\rho \bar{\rho} = - \mu,` 故
:math:`F_n = \frac{\rho^{n-1}(F_2-\bar{\rho}F_1) - \bar{\rho}^{n-1}(F_2 - \rho F_1)}{\rho - \bar{\rho}} = \frac{(\rho^{n-1} - \bar{\rho}^{n-1})F_2 + \mu(\rho^{n-2} - \bar{\rho}^{n-2})F_1}{\rho - \bar{\rho}}` 若
令  :math:`\rho = r(\cos \theta + \sin \theta),` :math:`\bar{\rho} = (\cos \theta - i\sin \theta),` 代入 :math:`F_n` 的表达式得

.. math:: F_n = \frac{r^{n-1} \sin(n-1)\theta F_2 + \mu r^{n-3} \sin(n-2) \theta F_1}{\sin \theta}

在数值计算的三次样条插值口 [15]_ 以及用差分方法解常微分方程边值问题时，要处理对角方程组，其系数可构成一个 :math:`n` 阶三对角行列式
:math:`D_n =\begin{vmatrix} a & b &  &  & & \\ c & a & b &  & & \\  & c & a & b & & \\  &  & \ddots & \ddots & & \\  &  &  & c & a & b \\ &  &  &  & c & a \end{vmatrix}` 将 :math:`D_n` 按第一行展开( 或按第一列展开 ) 后得

.. math:: D_n = aD_{n-1} - bcD_{n-2}

其中, :math:`D_1 = a; D_2 = \begin{vmatrix} a & b \\ c & a \end{vmatrix} = a^2 - bc`

显然 :math:`(5.11)` 式符合 :math:`(5.1)` 的形式，因此可以按上述方法得到 :math:`D_n` 的通项公式来进行计算。这也是Fibonacci数列推广形式的一种应用．  


4 Fibonacci数列和黄金分割比的MATLAB的实现
-----------------------------------------

设  :math:`f(n)` 为 :math:`n` 个月后兔子的对数，最关键的事实是，月末兔子的对数等于月初兔子的对数加上由成熟兔子生育出来的兔子对数： :math:`f(n)=f(n-1) + f(n+2)` ，初始条件是第一个月有1对兔子，第二个月有2对兔子： :math:`f(1)= 1,f(2) = 2.`

下面为M文件  :math:`fibonacci.m` 中的MATLAB函数，它能生成包含前 :math:`n` 个Fibonacci数构成的 :math:`n` 维向量。 

.. code-block:: matlab

   % File  Saved as Fib01.m 
   Function f = fibonacci(n)
   % FIBONACCI Fibonacci sequence
   % f = FIBONACCI (n) generates the first n Fibonacci numbers.
   F = zeros(n,1);
   f(1) = 1;	f(2) = 2;
   for k = 3:n
     f(k) = f(k-1) + f(k-2);
   end
   
:math:`fibonacci(12)`  运行后的输出显示为

::

   1	2	3	5	8	13	21	34	55	89	144	233
   
我们求黄金分割比  :math:`f = fibonacci(40);` 然后计算相邻两数的比值

.. code-block:: matlab

   f(2:n) ./f(1:n-1)
   2.00000000000000
   1.50000000000000
          ┆
   1.61803398874989
   1.61803398874990
   1.61803398874989
   1.61803398874989
   % 得到 φΦ≈1.618
   
如果我们只是需要第 :math:`n` 个Fibonacci数，那么我们可以采用下面的M-程序，这大大压缩了计算量和存贮空间。

.. code-block:: matlab

   % File  Saved as Fib02.m 
   Function f = fib02(n)
   % FIB02  Produce the nth Fibonacci number for any input positive integer n. 
   % f = FIB02 (n) generates the first n Fibonacci numbers.
   F = zeros(n,1);
   f(1) = 1;	f(2) = 2;
   for k = 3:n
	    f(k) = f(k-1) + f(k-2);
   end


5 参考文献
----------

.. rubric:: Footnotes

.. [1] A.Brousseau (1969). "Fibonacci Statistics in Conifers"[J]. Fibonacci Quarterly (7): 	525–532 
.. [2] Sigler Laurence E. (trans.) (2002). Fibonacci's Liber Abaci.[M]Springer-Verlag.ISBN  	0-387-95419-8. Chapter II.12, pp. 404–405. 
.. [3] Shari Lynn．Suppose more rabbits are born，Submitted November 1 986． 
.. [4] Dov Jarden．On the periodicity of the last．digits of the fibonacci numbers．The 	Fibonacci quarterly。l 963：2l-22．
.. [5] Doczi, György (2005) [1981]. The Power of Limits: Proportional Harmonies in Nature, 	Art, and Architecture. [M]Boston: Shambhala Publications. ISBN 1-59030-259-1.
.. [6] 吴振奎.Fibonacci数列.沈阳[M].辽宁教育出版社,1987. 
.. [7] 黄忠欲.Fibonacci数列表达式发现探索.[J].温州师范大学学院报.2004,25(2)
.. [8] 宋庭武.用特征方程推导Fibonacci数列的通项公式[J]..科技信息.2010,2(17).
.. [9] 黄忠裕．一个数学历史名题的模型建立及其教学设想［J］．湖州师范学院学报，2003，25（3）：	120
.. [10] 赵秀梅，赵宗吕．Fibonacci数列的应川研究．山尔建筑l：科学院学报，2004：2．4．
.. [11] 郭晓丽，职桂珍．Fibonacci数列的推广及虑用．郑州轻工业学院学报，2001：3－5．
.. [12] 陈计．Fibonacci二角形．数学通讯，1994：3－6．
.. [13] 马巧云．广义Fibonacci数列的通项．硝安联合人学学报，2004：30．32；
.. [14] 吴茂念．广义Fibonacci数列一些前n项和式．贵州人学学报，2005：343．347．
.. [15] 静翠薇．计算方法论[M].北京：高等教育出版社，1985.42-47. 
