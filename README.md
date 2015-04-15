algorithm [ python 实现 ] - PEP8
=================

 * insert sort 
 * merge sort (sub)
 * random list
 * heap sort
 * quick sort
 * counting sort
 * radix sort

 * linked list

=================

红黑树

黑树虽然本质上是一棵二叉查找树，但它在二叉查找树的基础上增加了着色和相关的性质使得红黑树相对平衡，从而保证了红黑树的查找、插入、删除的时间复杂度最坏为O(log n)。

当在对红黑树进行插入和删除等操作时，对树做了修改可能会破坏红黑树的性质。为了继续保持红黑树的性质，可以通过对结点进行重新着色，以及对树进行相关的旋转操作，即通过修改树中某些结点的颜色及指针结构，来达到对红黑树进行插入或删除结点等操作后继续保持它的性质或平衡的目的。

MySQL Index B+Tree ：http://blog.codinglabs.org/articles/theory-of-mysql-index.html
http://blog.csdn.net/v_july_v/article/details/6530142

MySQL MyISAM Innodb：http://blog.csdn.net/php10086/article/details/6334164

动态规划

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
