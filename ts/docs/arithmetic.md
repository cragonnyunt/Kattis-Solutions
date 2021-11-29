# arithmetic

Instead of turning base-8 to base-10, and then base-16,
turning into base-2 is faster and shortcut method.

Since 8 = 2^3, each 1 digit in base-8 can be mapped into 3 digits in binary (padding 0 if less than 3 digits)

7   (oct) -> 111            (binary)
66  (oct) -> 110,110        (binary)
222 (oct) -> 10,011,011     (binary)
...

16 = 2^4, so we need to group 4 digits in binary to convert it to base-16 numbers.

111         (binary)    ->  0111        ->  7 (hex)
110,110     (binary)    ->  0011,0110   ->  36 (hex)
10,011,011  (binary)    ->  1001,1011   ->  9B (hex)
