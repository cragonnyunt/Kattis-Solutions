# happyprime

For this problem, 0 and 1 are not prime numbers. Thus, we need to start calculate from prime number 2 and so on.

The `squaredSum` function take the number and determine the happiness by sum of the squares of each digit. 

If we calculate `squaredSum` recursively for primes number between 2 and 10,

```
2 -> 2^2 = 4
4 -> 4^2 = 8
8 -> 8^2 = 16
16 -> 1^2 + 6^2 = 37
37 -> 3^2 + 7^2 = 58
58 -> 5^2 + 8^2 = 89
89 -> 8^2 + 9^2 = 145
145 -> 1^2 + 4^2 + 5^2 = 42
42 -> 4^2 + 2^2 = 20
20 -> 2^2 = 4
4 -> ... (recursively)

3 -> 3^2 = 9
9 -> 9^2 = 81
81 -> 8^2 + 1^2 = 17
17 -> 1^2 + 7^2 = 50
50 -> 5^2 = 25
25 -> 2^2 + 5^2 = 29
29 -> 2^2 + 9^2 = 85
85 -> 8^2 + 5^2 = 89
89 -> ... (recursively)

5 -> 5^2 = 25
25 -> ... (recursively)

7 -> 7^2 = 49
49 -> 4^2 + 9^2 = 97
97 -> 9^2 + 7^2 = 130
130 -> 1^2 + 3^2 = 10
10 -> 1^2 = 1

```

From above result, when we recursively finding happiness with the number, and the number got less than 10, only `1` and `7` would be happy. (Criteria 1)

If we can determine the number is happy, the sequence between original number and final number is also happy, and vice versa, for unhappiness. (Criteria 2)

```
E.g. since 2 is unhappy, 4, 8, 16, 37, 58, 89, 145, 42, 20 are also unhappy.
7 is happy, thus, 49, 97, 130, 10 are happy.

By storing previous results, if later any number found is already in the list of happy/unhappy, we don't need to recalculate again.
```

Since we only find the happiness for prime number, the multiplied result of the prime numbers can be skipped. (Criteria 3)
