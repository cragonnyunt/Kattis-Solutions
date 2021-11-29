# howmanydigits

Digits in number (n) is defined as

```
Math.floor(Math.log10(n))
```

Digits in number (n!) is

```
Math.floor(Math.log10(n!))
= Math.floor(Math.log10(1 * 2 * 3 * ... * n))
= Math.floor(Math.log10(1) + Math.log10(2) + ... + Math.log10(n))
```

Thus, digits in number (n!) is relative to (n-1)!. 

```
Math.floor(digits in number (n-1)! + Math.log10(n))
```
