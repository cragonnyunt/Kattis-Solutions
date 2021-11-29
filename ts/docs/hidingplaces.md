# hidingplaces

First mark the chess board (8x8 array) with 0. For each knight location input, mark the initial place with value 1, and mark the jumping places with (previous value + 1). If the marking value is lower than the existing value in the place, the new value is used. This is done recursively till the whole chess board is filled, and take the hightest value and the positions with that value.
