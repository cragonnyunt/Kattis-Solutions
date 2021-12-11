# snapperhard

Visualizing the snapper devices (total `n` devices) state according to the number of snaps.

`0` is off, and `1` is on. 

```
Snaps   Device                  Light
---
0       0-0-0-0-0-0-0-0-0...    0
1       1-0-0-0-0-0-0-0-0...    0
2       0-1-0-0-0-0-0-0-0...    0
3       1-1-0-0-0-0-0-0-0...    0
4       0-0-1-0-0-0-0-0-0...    0
5       1-0-1-0-0-0-0-0-0...    0
...
2^n-1   1-1-1-1-1-1-1-1-1...    1
2^n     0-0-0-0-0-0-0-0-0...    0
...
```

For the very first time, `snaps = 2^devices - 1` will light on the bulb. The light will reopen again after `2^n` snaps. 
