# consecutivesums

Every valid sum expression can be converted into

```
10 = 1 + 2 + 3 + 4
24 = 7 + 8 + 9 = (1 + 6) + (2 + 6) + (3 + 6) = 1 + 2 + 3 + (6 * 3)
```

First we calculate the sum of 1-to-N for every sum(1...N) < 1000000000.

And for the input number, we compare the difference of the input and partial sums. 

1. If the diff is less than 0, the possible valid sum no longer exists.
2. If the diff is the multiplier of numbers of summands, we can get the minimum summands numbers. From this information, we can calculate the starting number of sum expression.

```
Sum = (1 + ... + i) + (i * x)
Sum - (1...i) = i * x
(Sum - (1...i)) / i = x

Since starting number is 1 + x,

1 + (Sum - (1...i)) / i
```
