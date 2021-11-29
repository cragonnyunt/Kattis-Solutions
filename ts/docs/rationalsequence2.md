# rationalsequence2

We extended the sequence to see much better.

```
                                             1/1
                     1/2                                             2/1
         1/3                     3/2                     2/3                     3/1
   1/4         4/3         3/5         5/2         2/5         5/3         3/4         4/1
1/5   5/4   4/7   7/3   3/8   8/5   5/7   7/2   2/7   7/5   5/8   8/3   3/7   7/4   4/5   5/1
```

If `p = q`, it is `1/1` (the root), since no other element can have the same `p` and `q`.

If `p > q`, they are the right child of parent element, (that is left element's + 1). To get the left element,

```
Right = p / q = (p' + q) / q (here p' is p - q, the difference)

Left = p' / (p' + q) = (p - q) / (p - q + q)
     = (p - q) / p
```

If `p < q`, they are the left child of parent element. The only relationship can be found is with its parent element. We can go through ancestor(s) until we found the right child (of its ancestor) i.e. `p / q % p`. (Take a look at from 2/7,2/5,2/3,2/1, for example)

Another sequence to show the sequence,

```
                               1
               2                               3
       4               5               6               7
   8       9      10      11      12      13      14      15
16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
```

We can see that for parent no is becoming double, in left child. When we got the parent (right child) sequence no,

```
Left = Parent * (2 ^ level_difference)
```

_Note: level_difference is the line between child and parent fractions_
