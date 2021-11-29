# ignore

The digits that can display correctly even if upside down. 

```
0 -> 0
1 -> 1
2 -> 2
3
4
5 -> 5
6 -> 9
7
8 -> 8
9 -> 6
```

Thus, the digits not including 3, 4, 7 can be displayed correctly.

```
K       Kth number      K in 7th base
1       1               1
2       2               2
3       5               3
4       9               4
5       8               5
6       6               6
7       01              10
8       11              11
9       21              12
10      51              13
11      91              14
12      81              15
13      61              16
14      02              20
15      12              21
16      22              22
17      52              23
18      92              24
19      82              25
...
```

The K-th number looks like the inverse or K in 7-th base, except that 3 is mapped to 5, 4 is mapped to 9 and 5 is mapped to 8. 
