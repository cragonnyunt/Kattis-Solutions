# chartingprogress

For this problem, we will render (print) line by line, as moving all asterisk(*) to the left.

If there is no asterisk, only periods (.) will be display.

For lines with at least an asterisk,

1. offset `periods (.)` at the right most, (offset are marked from the previous line last asterisk from the right, or zero(0))

2. column `asterisk (*)` in the middle for ordering logs

3. (length - column - offset) `periods (.)` at the left most to fill remaining spaces.

offset are initialized/reset to 0, after each blank line.
