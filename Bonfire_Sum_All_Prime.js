
function isPrime (num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function sumPrimes(num) {
//    A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.
//
//The provided number may not be a prime.
    
    var arr = [];
    for (var i = 2; i <= num; i++) {
        if(isPrime(i)) {
            arr.push(i);    
        }
    }
    
    
    var total = arr.reduce(function (previousVal, currentVal, currentIndex, array) {
        return previousVal + currentVal;
    });
  return total;
}

sumPrimes(17);