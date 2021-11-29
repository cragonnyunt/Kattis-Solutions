# bestcompression

Numbers of bits and their representation of different files

```
bits    files
---
0       (x)
1       (x) 0 1
2       (x) 0 1 00 01 10 11
3       (x) 0 1 00 01 10 11 000 001 010 011 100 101 110 111
4       (x) 0 1 00 01 10 11 000 001 010 011 100 101 110 111 0000 0001 ...
...
```

_Note: to represent only one file, 0 bits are needed. That file is represented as (x)_

From above sampling,

```
bits    files
---
0       2^0                             2^1-1
1       2^0 + 2^1                       2^2-1
2       2^0 + 2^1 + 2^2                 2^3-1
3       2^0 + 2^1 + 2^2 + 2^3           2^4-1
4       2^0 + 2^1 + 2^2 + 2^3 + 2^4     2^5-1
...
```

Therefore `n` bits can compress `2^(n-1) - 1` files.
