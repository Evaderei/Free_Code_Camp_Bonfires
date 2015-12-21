// Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

// The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

// As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.


/* 
	Step1: Generate fibonacci array
	Step2: Have fibonacci array, parse through array to find where "num" (1st argument) fits, provides an an index
	Step3: With above index(of what number to add up to), add all numbers in fibonacci array (from Step 1) up to index;
	Step4: Finishing about, return number;
*/
function sumFibs(num) {
    
  // Step1: Generate Fibonacci Array
    // Instantiate needed objects
    var total  = 0;
    var prev = 1;
    
    for (var current = 1; current <= num; current+= prev) {
      prev = current - prev;
      if (current % 2 !== 0) {
        total += current;
      }
    }
    return total;
}

sumFibs(4);
