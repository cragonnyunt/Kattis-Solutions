# fractionallotion

We can evaluate the equation into.

```
1 / n = (1 / x) + (1 / y)

1 / n = (x + y) / xy

nx + ny - xy = 0


x = yn / (y - n)
```

For `x` and `y` to be exists, `yn` should be divisible by `y - n`. Since they are both positive numbers, `y` must be at least `n + 1`.

```
y = n + 1, x = n(n + 1) / 1 = n^2/1 + n
y = n + 2, x = n(n + 2) / 2 = n^2/2 + n
y = n + 3, x = n(n + 3) / 3 = n^2/3 + n
y = n + 4, x = n(n + 4) / 4 = n^2/4 + n
y = n + 5, x = n(n + 5) / 5 = n^2/5 + n
...
y = n + c, x = n(n + c) / c = n^2/c + n
...
y = 2n   , x = n(n + n) / n = n^2/n + n = n + n = 2n
```

From above list, `x` could only exists if and only if some constant `c` can divide `n^2`. How many times `c` can divide is the answer of how many pairs `x` and `y` can exists.

_Note: x and y are distant pairs. We do not need to calculate beyond `sqrt(n^2) = n`_
