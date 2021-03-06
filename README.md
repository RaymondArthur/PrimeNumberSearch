# Prime Number Search
An implementation of the sieve of Eratosthenes, which is an ancient algorithm that finds prime numbers from 1 to *n*.
  
## Link to github page
Visit https://raymondarthur.github.io/PrimeNumberSearch/ for an interactive demonstration of this app.

## Purpose
The purpose of this little app is twofold:
  1. To let me learn about a simple mathematical algorithm that identifies prime numbers from 1 to *n*
  2. To create a simple UI via React using a web worker that performs a complex calculation without freezing the browser UI

## Structure
- index.html has the base HTML code and links to JS scripts and CSS style sheets
- react.js has the code for the React components
- findPrimes.js has the code for the Sieve of Eratosthenes **implemented as as a web worker**
- styles.css has the styling css code

## Instructions
Enter a positive integer into the blue box and press "Find Primes". The algorithm will count the number of prime numbers between 1 and the user-supplied integer *n* and then display the result on screen (along with the time taken to do the calculation).

## Why care about finding prime numbers?
As someone with a maths/stats/quantitative finance background, I am intrigued by calculations and algorithms. Identifying prime numbers from 1 to *n* was an interesting self-contained problem that allowed me to revisit coding with a view to making an algorithm efficient.

Finding prime numbers seems like a simple process - and it is. But finding prime numbers *quickly* is not a simple process. My first attempt at this algorithm was accurate and could identify all 78498 primes from 1 to 1000000, but the algorithm took a very long time to run (more than 40 seconds) using Node.js on my i5-6400T dekstop (old-ish 4C/4T processor).

Having heard that identifying primes was a common performance-benchmarking tool, I spent some time researching and came acorss an ancient algorithm called the **Sieve of Eratosthenes**, which has a novel way of efficitenly identifying prime numbers from 1 to *n*.

## Why use a web worker to calculate the sieve?
Web workers are *run on a thread that is separate to the main thread.* Web workers allow light-weight implementation of multi-threaded code in web apps, as opposed to callbacks/promises that merely allow the order of code execution to be manipulated.

The first implementation of this little app was via promises, which meant the UI would freeze when the user ran the algorithm for a large number (e.g. 10,000,000).

## An explanation of the Sieve of Eratosthenes
Essentially, the sieve of Eratosthenes has several steps:
1. Create an array with n elements [1,2,...,*n*], where *n* = maximum integer to be checked for primality, and set the value of each element to the boolean value TRUE.
2. Mark the first element, which represents the integer 1, as FALSE because it is not a prime. 
3. Mark the second element, which represents the integer 2, as TRUE because it is a prime.
4. Mark the values of all multiple of 2 as FALSE, because these are even numbers which by definition are not prime numbers.
5. For each remaining element in the array, check to see if its value is FALSE. If it is FALSE, the element is not a prime number, and the algorithm moves on to the next element in the array. If it is TRUE, the element is a prime number, and the element marks its multiples as FALSE (e.g. the value of the third element is TRUE since it represents the integer 3, but the value of multiples of 3 such as 3,6,9 etc can immediately be set to FALSE since they can be divided by 3 and therefore are not prime numbers).
6. The whole algorithm only needs to go as far as sqrt(n), since sqrt(n) is the largest factor of *n*.
7. Once the algorithm has finished, count the number of elements in our array with a value of TRUE - this will be the number of primes between 1 and *n*. Also, we can return the indexes of TRUE elements to return the set of prime numbers from 1 to *n*. 

## React components
React components serve up the various components of the UI. This is a simple app and I wanted the UI to be basic, so the React DOM components reflect this simplicity.
