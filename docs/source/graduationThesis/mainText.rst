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

+============+=====+=====+=====+=====+=====+=====+=====+=====+=====+=====+=====+=====+=====+=====+=====+=====+=====+=====+
+------------+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
|   月份 n   |  1  |  2  |  3  |  4  |  5  |  6  |  7  |  8  |  9  |  10 |  11 |  12 |  13 |  14 |  15 |  16 |  17 |  18 |
+============+=====+=====+=====+=====+=====+=====+=====+=====+=====+=====+=====+=====+=====+=====+=====+=====+=====+=====+
|:math:`U _n`|  1  |  1  |  2  |  3  |  5  |  8  |  13 |  21 |  34 |  55 |  89 | 144 | 233 | 377 | 610 | 978 | 1588| 2566|
+------------+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+

显然，通过以上表格可推出如下一般递推关系式：

:math: `F_0 = 1,F_1 = 1,\cdots,F_n = F_(n-1) + F_(n-2),n \geq 2

满足以上递归关系的数列被称为Fibonacci数列。



