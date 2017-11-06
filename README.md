algorithm.
=================

```
 * selection sort 选择排序
   
   开始时整个数列为扫描列表。
   每次扫描找出当前扫描列表中最小的那个，交换移到扫描列表最前，然后排除出扫描列表
   循环至扫描列表长度为1结束
   
   特点1：运行时间与输入无关，无论何种输入排序时间相差无几。上一次扫描无法为下一次扫描提供可用的信息
   特点2：数据移动最少，交换次数与数组大小是线性关系
   
 * insert sort 插入排序
 
   对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。未排序数组逐渐减少。
   因而在从后向前扫描过程中，需要反复把已排序元素逐步向后挪位，为最新元素提供插入空间。
 
   特点1：与输入有关，越接机排序顺序的输入序列所用时间越短
   特点2：如果要优化着重于减少移动的操作次数（比如用向右平移代替元素两两交换）
 
 * shell sort 希尔排序
 
   中心思想是使数组中任意间隔为 [h数列中的元素] 都是有序的
   生成h数列(每个i生成2个,i>=0,值要小于排序数组长度) 9*4的i次方 - 9*2的i次方 + 1 < arr.length || 2的i+2次方 * (2的i+2次方-3) + 1
   过程使用插入排序(步长为h数列中的值循环递减至最小的元素1)
   最终再用插入排序将局部有序的数组排序
 
   特点1：插入排序对于大规模乱序数组较慢，元素需要从一端移动到另一端。希尔排序减少移动多做比较，改进此问题。
 
 * merge sort (sub) 归并排序
 
   主要缺点是需要额外空间来归并跟 N 成正比 (归并2个已排序数组的操作其实可以使用各种方式)
   由于排序路径跟二叉树相似，所以时间跟 NlgN 成正比
   
   自顶向下的排序算法就是把数组元素不断的二分，直到子数组的元素个数为一个，因为这个时候子数组必定是已有序的。
   然后将两个有序的序列合并成一个新的有序的序列，两个新的有序序列又可以合并成另一个新的有序序列，以此类推，直到合并成一个有序的数组
   
   自底向上的归并排序算法的思想就是数组中先一个一个归并成两两有序的序列（不需要递归分割，直接扫描两两处理）。
   两两有序的序列归并成四个四个有序的序列，然后四个四个有序的序列归并八个八个有序的序列，以此类推直到归并的长度大于整个数组的长度，此时整个数组有序。
 
 * quick sort
 
   结合了额外空间小和 NlgN 复杂度的特点
   该算法还可以进一步改进，不同于普通的两切分，甚至可以考虑三切分 [ 小于x1 (x1) 大于x1小于x2 (x2) 大于x2 ]
 
 * heap sort
 * random list
 * counting sort
 * radix sort
 * linked list
```

=================

## 红黑树

黑树虽然本质上是一棵二叉查找树，但它在二叉查找树的基础上增加了着色和相关的性质使得红黑树相对平衡，从而保证了红黑树的查找、插入、删除的时间复杂度最坏为O(log n)。

但需要注意的是，红黑树并不是平衡二叉树，恰恰相反，红黑树放松了平衡二叉树的某些要求，由于一定限度的“不平衡”，红黑树的性能得到了提升。

当在对红黑树进行插入和删除等操作时，对树做了修改可能会破坏红黑树的性质。为了继续保持红黑树的性质，可以通过对结点进行重新着色，以及对树进行相关的旋转操作，即通过修改树中某些结点的颜色及指针结构，来达到对红黑树进行插入或删除结点等操作后继续保持它的性质或平衡的目的。

MySQL Index B+Tree ：http://blog.codinglabs.org/articles/theory-of-mysql-index.html
http://blog.csdn.net/v_july_v/article/details/6530142

MySQL MyISAM Innodb：http://blog.csdn.net/php10086/article/details/6334164

## 动态规划

```
CUT-ROD(p,n) // p为价格数组 p[1..n],n为长度
  if n==0
    return 0
  q=-oo
  for i = i to n
    q=max(q,p[i]+CUT-ROD(p,n-i))
  return q
```

这种情况将反复地用相同的参数对自身进行递归调用，即反复求解相同的子问题

假设n＝4

```
        4
     /  \  \ \    
    3    2  1 0
  / \\  /\  |  
 2  1 0 1 0 0
/\  |   |
1 0 0   0
|
0
```

解决方案有：

1.带备忘的自顶向下法（当需要一个子问题的解时，先检查是否保存过此解，可以存储各种所需信息）
2.自底向上法（要求划分好子问题的规模后，按小至大排序后依次求解。这样当求解某个子问题时，更小的子问题都已求解完毕）

```
BOTTOM-UP-CUT-ROD(p,n)
let r[0..n] be a new array
r[0] = 0
for j = 1 to n
  q = -oo
  for i = 1 to j
    q = max(q,p[i]+r[j-i])
  r[j] = q
return r[n]
```

贪心算法和动态规划最大的不同在于，它并不是首先寻找子问题的最优解，然后在其中进行选择。而是首先做出一次“贪心”选择，在当时（局部）看来最优的选择，然后求解出所选的子问题，从而不必费心求解所有可能相关的子问题。

动态规划方法将问题分解为多个子问题，然后将子问题的最优解整合成原问题的最优解。作贪心算法时，只有一个非空子问题，将递归算法转化为迭代算法。

贪心算法应用之一：赫夫曼编码

##堆

二项堆是指满足以下性质的  *!* 二项树 *!*  的集合：

* 每棵二项树都满足最小堆性质，即结点关键字大于等于其父结点的关键字
* 不能有两棵或以上的二项树有相同度数（包括度数为0）。换句话说，具有度数k的二项树有0个或1个。

斐波那契堆(Fibonacci heap)是计算机科学中树的集合。它比二项式堆具有更好的平摊分析性能，可用于实现合并优先队列。(在队列中，调度程序反复提取队列中第一个作业并运行，因为实际情况中某些时间较短的任务将等待很长时间才能结束，或者某些不短小，但具有重要性的作业，同样应当具有优先权。堆即为解决此类问题设计的一种数据结构。)
