# vacuumba

The initial direction is positive Y direction. (i.e. 90 degree)

```
^
|
|90 Deg
.--->
```

The distance, increment in x, y can be assembled into right triangle, as shown below. The angle is between x and distance.

```
    Distance
    ^
   /|
  / |
 /  |
.-->. y
x
```

Thus, the increment in x and y, for each segment in robot movement.

```
x += distance * Math.cos(angle)
y += distance * Math.sin(angle)
```

`Math.cos` and `Math.sin` accept only radian, we need to convert the angle in degree, to radian.
