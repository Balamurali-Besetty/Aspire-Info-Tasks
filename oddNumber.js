/**
 * Checks if a number is prime.
 * @param {number} n - The number to check.
 * @returns {boolean} - True if the number is prime, false otherwise.
 */
 
function Prime(number) {
    // Check if the number is divisible by 2
    if (number % 2 === 0) {
      return false;
    }
  
    // Check if the number is divisible by any prime number less than or equal to its square root
    for (var i = 3; i <= Math.sqrt(number); i += 2) {
      if (number % i === 0) {
        return false;
      }
    }
  
    // If the number is not divisible by any prime number less than or equal to its square root, it is prime
    return true;
  }
  
  function odddifference(max) {
    var primes = [];
  
    // Iterate over all numbers from 0 to max
    for (var i = 0; i <= max; i++) {
      // Check if the number is a one-digit-difference number
      var isOneDigitDifferenceNumber = true;
      for (var j = 0; j < i.toString().length - 1; j++) {
        if (i.toString()[j + 1] - i.toString()[j] !== 1) {
          isOneDigitDifferenceNumber = false;
          break;
        }
      }
  
      // If the number is a one-digit-difference number and a prime number, add it to the list of primes
      if (isOneDigitDifferenceNumber && Prime(i)) {
        primes.push(i);
      }
    }
  
    // Return the list of primes
    return primes;
  }
  
  var primes = odddifference(10000000);
  console.log("The number of prime numbers between 0 and 10 million that are one-digit-difference numbers is " + primes.length);