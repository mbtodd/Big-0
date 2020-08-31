## Big O Cheat Sheet:
-------------------

### Big Os
O(1) Constant - no loops
<!-- O(log N) Logarithmic - usually searching algorithms have log(n) if they are sorted (Binary Search) (not on hash maps though) -->
O(n) Linear - for loops while loops
<!-- O(n*log(n)) Log Linear - Sorting operations usually -->
O(n^2) Quadratic - every element in a collection needs to be compared to ever other element. Two nested loops
<!-- O(2^N) Exponential - recursive algorithms that solve a problem of size N -->
O(n!) Factorial - you are adding a loop for every element.

** Iterating through half a collection is still O(n)
** Two separate collections: O(a * b)

_What can cause Time in a function?_
Operations (+, -, *, /)
Comparisons (<, >, ==)
Looping (for, while)
Outside Function call (function())

_Rule Book_
Rule 1: Always worst Case
Rule 2: Remove Constants
Rule 3: Different inputs should have different variables. O(a+b). A and B array nested would be O(a*b)
      * for steps in order
      * for nested steps
Rule 4: Drop Non-dominant terms
-------------------

_Which code is best?_
Readable
Memory - Space Complexity
Speed - Time Complexity

_What causes Space Complexity?_
Variables
Data Structures
Function Call
Allocations


Interview: How to Solve Problems

1. Analytic skills
2. Coding Skills
3. Technical skills
4. Communication skills




<!-- | Syntax | Description |
| :---   |    :----:   |
|  news  | hello       | -->

