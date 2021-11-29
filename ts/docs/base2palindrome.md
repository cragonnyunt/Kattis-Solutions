# base2palindrome

For this problem, first we need to determine how many bits are in the nth palindrome. So, we sample a few

```
n       nth-palindrome
---
1       1
2       11
3       101
4       111
5       1001
6       1111
7       10001
8       10101
9       11011
10      11111
11      100001
12      101101
13      110011
14      111111
15      1000001
16      1001001
17      1010101
18      1011101
19      1100011
20      1101011
21      1110111
22      1111111
...
```

When we look at above pattern (look at the palindromes at only 1s), each bits required to represent the nth palindrome increased 1 when n is increased by 2 power series.

```
Index   n           nth-palindrome
---
        (0)
0       1   0+1     1
1       2   1+1     11
2       4   2+2     111
3       6   4+2     1111
4       10  6+4     11111
5       14  10+4    111111
6       22  14+8    1111111
7       30  22+8    11111111
8       46  30+16   111111111
9       62  46+16   1111111111
...
```

We could see that `array[n] = array[n-1] + 2^floor(n/2)`

_Note: 0 is added to the first index for simplicity, when retrieving bits_

To get the bits required for nth palindrome, we need to get index of smallest element larger than n in the array. (e.g. if n is 40, n is between 30(8) and 46(9), therefore 9 bits are needed)

To generate palindrome, it depends on either the bits are even, or odd. If bits are even, we need to generate only left side of bits, reverse it to get right side. And finally combine them both.

```
palindrome      left    right   left (expended)

10000001        1000    0001    1000+0
10011001        1001    1001    1000+1
10100101        1010    0101    1000+10
10111101        1011    1101    1000+11
11000011        1100    0011    1000+100
11011011        1101    1011    1000+101
11100111        1110    0111    1000+110
11111111        1111    1111    1000+111
```

Generating left side is as follow.
```
2^((bits / 2) - 1) + n - (array[n - 1] + 1)
```

If bits are odd, we need to generate left and middle of bits, reverse only the left (without middle one) and combine left, middle and right bits.

```
palindrome      left    middle  right   left+middle (expended)

100000001       1000    0       0001    10000+0
100010001       1000    1       0001    10000+1
100101001       1001    0       1001    10000+10
100111001       1001    1       1001    10000+11
101000101       1010    0       0101    10000+100
101010101       1010    1       0101    10000+101
101101101       1011    0       1101    10000+110
101111101       1011    1       1101    10000+111
110000011       1100    0       0011    10000+1000
110010011       1100    1       0011    10000+1001
110101011       1101    0       1011    10000+1010
110111011       1101    1       1011    10000+1011
111000111       1110    0       0111    10000+1100
111010111       1110    1       0111    10000+1101
111101111       1111    0       1111    10000+1110
111111111       1111    1       1111    10000+1111
```

Generating left and middle side is as follow.
```
2^(ceil(bits / 2) - 1) + n - (array[n - 1] + 1)
```

Finally we need to convert the resulting palindrome to base 10, and output the result.
