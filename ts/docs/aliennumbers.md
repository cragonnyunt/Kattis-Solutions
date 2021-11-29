# aliennumbers

First, we need to transform the alien number to the number in base-10. Then again, change the number to the target language, (base).

Lets look at 4th input in example to see how this works. 

```
CODE O!CDE? A?JM!.
```

Base is the number of available digits in number system. (0-9, so it is base-10, 0-1 so it is base-2)
`O!CDE?` so it is base-6. 

Then, we need to map each letter in alien number into its positional value.

Source
```
O!CDE?

012345
```

Number
```
CODE

2034
```

To change it to base-10, from base-6, we need to reverse it. And multiply with (base)^(position) for each number in increasing power.

```
4*(6^0) + 3*(6^1) + 0*(6^2) + 2(6^3) = 454
```

Targeted language is `A?JM!.` so it is base-6, too. We need to change base-10 to base-6 by repeatedly dividing, and mapping the reminder to targeted language.

```
454 = 75 * 6 + 4 => !
 75 = 12 * 6 + 3 => M
 12 =  2 * 6 + 0 => A
  2 =  0 * 6 + 2 => J
```

Reverse and join it together, and we get the result
