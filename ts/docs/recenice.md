# recenice

First we prepare the distinct string between 1 and 90, to convert the number to letter.

```
Num0to9     =   ['','one', 'two', 'three', ... 'nine']
Num10to19   =   ['ten', 'eleven', 'twelve', ... 'nineteen']
Num10to90   =   ['', 'ten', 'twenty', 'thirty', ... 'ninety']
```

To convert the number to letters, separate hundreds, tens, and ones parts (positional value).

Hundred part - simply add `hundred` after elements of `Num0to9` 
Ten part - if >1, take elements of `Num10to90`, if not take `Num10to19`
One part - take from `Num0to9`

We already got the length from string. Let the string(original) length S, replace number, R and its length L, thus, the total length (number inserted to string) is R,

```
R = S + L

S = R - L
```

At least the number must be greater than 4, since at least the letters are 3. 

Loop through `R-L`, for number R (>4), and match with input string length.
