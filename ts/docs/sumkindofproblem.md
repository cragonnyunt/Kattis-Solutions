# sumkindofproblem

For sum of first `n` positive integers,

```
1 + 2 + 3 + ... + n

= (1 + n) + (2 + n - 1) + (3 + n - 2) + ... (x + n - (x - 1))
= (1 + n) + (2 + n - 1) + (3 + n - 2) + ... (x + n - x + 1)
= (n + 1) + (n + 1) + (n + 1) + ... (n + 1)
= (n + 1) * n / 2 (half of `n` times since the combination of two integers from start and end)
```

For sum of first `n` odd integers,

```
1 + 3 + 5 ... + (2n - 1)

= (1 + 2n - 1) + (3 + 2n - 3) + (5 + 2n - 5) + ... + (x + 2n - x)
= 2n + 2n + 2n + ... + 2n
= 2n * n / 2
= n * n
```

For sum of first `n` even integers,

```
2 + 4 + 6 ... + 2n

= (2 + 2n) + (4 + 2n - 2) + (6 + 2n - 4) + ... (x - 2n - (x - 2))
= (2n + 2) + (2n + 2) + (2n + 2) + ... (2n + 2)
= (2n + 2) * n / 2
= (n + 1) * n
```
