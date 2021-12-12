# acm2

If the first problem it choose take larger than 300, nothing can be solved and there is no penalty time.

Sort the problems, by time taken, without the chosen problem. And for each problem added, calculate the remaining time from total time (300), so that the problem time did not exceed the remaining time.

Append the chosen problem at the first index of the list.

The number of problems selected is the number of problems that can be solved.

For penalty time, lets consider we can solve problems which takes `A`, `B` and `C` time.

```
Problem     Submitted Timestamp     Penalty Time
---
A           A                       A = A
B           A + B                   A + (A + B) = 2A + B
C           A + B + C               A + (A + B) + (A + B + C) = 3A + 2B + C
```

Sort the problems by descending order of submission. (i.e. `C`, `B`, `A`)

And sum them with increasing multiplier. (i.e. `(C * 1) + (B * 2) + (A * 3)`)
