# growlinggears

The equation

```
T = -aR^2 + bR + c
```

Its derivative (dT/dR)

```
dT/dR = -2aR + b
```

At the turning point, the derivative dT/dR is 0, thus

```
0 = -2aR + b
2aR = b
R = b/2a
```

Substitute R in original equation,

```
T = -a(b/2a)^2 + b(b/2a) + c
T = -(b^2)/4a + (b^2)/2a + c
```

This is the equation for highest torque for each gear. To find the gear with highest torque, compare each gear's torque and select the max one.
