# bottledup

We need to variables `a`, and `b` which solves

```
volume = bottle1 x a + bottle2 x b
```

`a` can be anything from `0` to `volume/bottle1`. Then `b` is,

```
(volume - bottle1 x a) / bottle2
```

Both `a` and `b` must be integers (not floats). If there are multiple possible pairs, select the lowest of the sum of the pair. If nothing is found, print `Impossible`.
