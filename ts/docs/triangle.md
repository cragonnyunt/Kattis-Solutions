# triangle

For each iteration, the triangle sides are multiplied by 3, but each side width is reduced by the factor of 2.

```
Iteration   Triangle Sides  Proportion to original width/height
0           3               1
1           9               1/2
2           27              1/4
3           81              1/8
4           243             1/16
5           729             1/32
6           2187            1/64
```

The total circumference is `the number of triangle Sides x proportion`, i.e.
For iteration `n`, the circumference = `3^(n+1)/2^n`.
The digits to represent is the ceiling of log 10 of the circumference.

```
ceil(log10(3^(n+1)/2^n)
=ceil(log10(3^n)-log10(2^n)+log10(3))
=ceil(nlog10(3)-nlog10(2)+log10(3))
=ceil(nlog10(3/2)+log10(3))
=ceil(nlog10(1.5)+log10(3))
```
