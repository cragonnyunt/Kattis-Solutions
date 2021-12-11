# textencryption

First of all, we need to convert the string to uppercase and remove spaces.

Then, make an empty array and fill its indexes with each character in the input string.

For the first round, fill starting from index 0, and increment the index by the cipher key value, till the index must not exceed the original string length. 

For the second round, fill starting from index 1 (first round starting index + 1), and make the same steps from previous step.

For the third round, fill starting from index 2 (second round starting index + 1), and so on.

Till all the result elements are filled up.

The visualizations for sample input 1 and 2 are shown below.

```
CTUOPENPROGRAMMINGCONTEST

C T U O P E N P R O G R A
 M M I N G C O N T E S T

CMTMUIONPGECNOPNRTOEGSRTA
```

```
THISISASECRETMESSAGETHATNOONESHOULDEVERSEELETSENCRYPTIT
T      H      I      S      I      S      A      S
 E      C      R      E      T      M      E      S
  S      A      G      E      T      H      A      T
   N      O      O      N      E      S      H      O
    U      L      D      E      V      E      R      S
     E      E      L      E      T      S      E      N
      C      R      Y      P      T      I      T

TESNUECHCAOLERIRGODLYSEENEEPITTEVTTSMHSESIAEAHRETSSTOSN
```
