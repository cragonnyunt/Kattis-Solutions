# rationalsequence

#### 1
We extended the sequence to see much better. 

```
                                             1/1
                     1/2                                             2/1
         1/3                     3/2                     2/3                     3/1
   1/4         4/3         3/5         5/2         2/5         5/3         3/4         4/1
1/5   5/4   4/7   7/3   3/8   8/5   5/7   7/2   2/7   7/5   5/8   8/3   3/7   7/4   4/5   5/1
```

For every `p/q`, the next fraction is `q/something`. We only need `something` replacement.

If `q = 1`, the next is `q/p + 1` (See, 1/1, 2/1, 3/1 and 4/1)

If `q = 2`, the next is the reverse fraction `q/p` (See, 1/2,3/2,5/2 and 7/2)

If `p < q`, the fraction is left child. To get the right child from the parent is `q/q-p`.

If above three conditions are not met, it is right child, and it is a little tricky here.

```
          a/b
a/q               q/b
...
       p/q    q/something
```

(The above chart is intuitive to see from extended sequence [1](#1))

Where `a = p % q` and `b = q - a = q - (p % q)`.

From `q/b` to `q/something`, is the left child extending, thus, `q` is added to `b` by `p/q` times. (difference levels)

```
something = b + q * (p/q)
```

Finally, we got

```
something = q - (p % q) + q * (p/q)
          = q * (1 + p/q) - (p % q)
```
