# matchsticks

The sticks required to make the digits

```
Digit   Sticks

1       2
2       5
3       5
4       4
5       5
6       6
7       3
8       7
9       6
0       6
```

The number of sticks and their smallest/largest number can make,

```
Sticks  Smallest    Largest
2       1           1
3       7           7
4       4           11
5       2           71
6       6           111
7       8           711
8       10          1111
9       18          7111
10      22          11111
11      20          71111
12      28          111111
13      68          711111
14      88
15      108
16      188
17      200
18*     208
19      288
20      688
21      888
22      1088
23      1888
24      2008
25      2088
26      2888
27      6888
28      8888
29      10888
30      18888
31      20088
32      20888
```

From above table, the smallest numbers are repeating from stick 18 and above, by appending 8 to the end, in their previous 7-th smallest number. (Had to calculate all of this by hand, until the pattern is found)

For largest number, the digit length for `n` is

```
Math.floor(n / 2)
```

And fill with only `1`s except the starting number is `7` when `n` is odd number.
