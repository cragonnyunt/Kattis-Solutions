# doorman

We can let the people in, and track the difference and total person, as long as, the difference is smaller than what (Bruno in this question) can be remembered. When the difference hit the limit, we can look for the gender to enter the club, to minimize the difference, in first and second index.

If found, we start from the `index - 1` to re-pick from skipped person.

If not found, we can declare that the club is full, and output the total people.
