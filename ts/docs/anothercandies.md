# anothercandies

Dividing candies `C` into `N` heaps means `C` can be divided by `N` with no remainder, i.e. `C % N = 0`.

When `C` is composed of each candies `c1`, `c2`, `c3`,... etc, sum of each remainder is 0.

```
(c1 % N) + (c2 % N) + (c3 % N) + ... = 0
```

_Note: each `c1`, `c2`, ... can be quite large, so that need to use `BigInt` type_
