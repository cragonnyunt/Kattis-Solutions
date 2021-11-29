# magical3

For the number in a base to be end in `3`, the base has to be at least `4`. And the number must be equal to or greater than 3.

When the number `n` is represented in base `b`, and ends with `3`,

```
n = ... + z*b*b*b + y*b*b + x*b + 3 (x, y and z being arbitrary numbers)
```

Thus,

```
n - 3 = ... + z*b*b*b + y*b*b + x*b
```

For this problem, if the number `n` can be represented in base `b` with ending `3`, `n - 3` is divisible by `b`, and `b` >= 4.

Be careful about optimization for large factors!

Some input has very large factors with a very small ones. (715827881 * 3 = 2147483643)

Finding base (>=4) with such factors can take a long time and exceed time limit.

Solution is to immediately find another factor and check if it is prime, then it is the base.
