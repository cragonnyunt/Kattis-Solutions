# humancannonball2

First of all `theta` is inputted in degree, thus we need to convert it into radium format

```
radium = degree * Math.PI / 180
```

For `y` formula, `t` is still missing. To get the value of `t`, we need to calculate from `x` formula.

```
t = x / (v0 * cos(theta))
```

Finally, `y` should be between

```
h1 + 1 < y < h2 - 1
```
