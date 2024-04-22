
// 1.a Print odd numbers in an array 
// using Anonymous function

let numbers = [1, 3, 4, 5,11 ,15 ,6, 7, 8, 9, 10];
let printOddNumbers = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
}
printOddNumbers(numbers);
console.log (printOddNumbers);
          // ----------------------------------

// 1.a Print odd numbers in an array 
//using IIFE function

let numbers = [1, 3, 4, 5,11,15 ,6, 7, 8, 9, 10];
((arr) =>{
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
}) (numbers);
console.log();

// ---------------------------------------------------------------------------------

// 1.b Convert all the strings to title caps in a string array
// using Anonymous function:

let ab = ["hi", "guvi", "students"];

(function(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    console.log(arr);
})(ab);
        //  --------------------------

// 1.b Convert all the strings to title caps in a string array
// using IIFE function:

let ab = ["hi", "guvi", "students"];
((arr) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
   }     
 })(ab);
console.log(ab);
// -------------------------

// 1.c Sum of all numbers in an array
// using Anonymous function
let array = [1, 2, 3, 4, 5];
let sum = function(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total+arr[i];
    }
    console.log(total);
}(array);

  //  -----------------------------

// 1.c Sum of all numbers in an array
// using IIFE function

let array = [1, 2, 3, 4, 5];
(function(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total =total+ arr[i];
    }
    console.log(total);
})(array);

// ------------------------------------------------------------

// 1.d. Return all the prime numbers in an array
// using Anonymous function
let prime = function(arr) {
  let primes = [];
  for (let num of arr) {
      let isPrime = true;
      if (num === 1) {
          isPrime = false;
      } else if (num > 1) {
          for (let i = 2; i <= Math.sqrt(num); i++) {
              if (num % i === 0) {
                  isPrime = false;
                  break;
              }
          }
      } else {
          isPrime = false;
      }
      if (isPrime) {
          primes.push(num);
      }
  }
  return primes;
};

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(prime(numbers)); 

// ------------------------

// 1.d. Return all the prime numbers in an array
// using IIFE function

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let primes = (function(arr) {
    let primes = [];
    for (let num of arr) {
        let isPrime = true;
        if (num === 1) {
            isPrime = false;
        } else if (num > 1) {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        } else {
            isPrime = false;
        }
        if (isPrime) {
            primes.push(num);
        }
    }
    return primes;
})(numbers);
console.log(primes); 

// ---------------------------------------

// 1.e Return all the palindromes in an array
// Using Anonymous function

let a = ["malayalam", "doll", "madam"];

let palindromes = function(a) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        let word = a[i];
        if (word === word.split('').reverse().join('')) {
            result.push(word);
        }
    }
    return result;
};
console.log(palindromes(a));

// -----------------------
// 1.e Return all the palindromes in an array
// Using IIFE function

let a = ["malayalam", "doll", "madam"];
let palindromes = (function(a) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        let word = a[i];
        if (word === word.split('').reverse().join('')) {
            result.push(word);
        }
    }
    return result;
})(a);
console.log(palindromes);
// ------------------------------------------------------------------

// 1.F. Return median of two sorted arrays of the same size.
// Using Anonymous function

let num1 = [11,4,7];
let num2 = [5,4, 6,7];

let median = function(num1, num2) {
    let merged = num1.concat(num2);
    let len = merged.length;
    let mid = Math.floor(len / 2);
    if (len % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
}(num1, num2);

console.log(median); 
//     ------------------------------------

// 1.F. Return median of two sorted arrays of the same size.
// Using IIFE function

let num1 = [11,4,7];
let num2 = [5,4, 6,7];

let median = (function(num1, num2) {
    let merged = num1.concat(num2);
    let len = merged.length;
    let mid = Math.floor(len / 2);
    if (len % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
})(num1, num2);

console.log(median); 
// ---------------------------------------------------------------------------

// 1.g Remove duplicates from an array
// Using Anonymous function

let numbers = [1, 2, 2, 3, 4, 4, 5];

(function(numbers) {
    let array = [];
    for (let i = 0; i < numbers.length; i++) {
        if (array.indexOf(numbers[i]) === -1) {
            array.push(numbers[i]);
        }
    }
    console.log(array);
})(numbers);

// ----------------------

// 1.g Remove duplicates from an array
// Using IIFE function

let numbers = [1, 2, 2, 3, 4, 4, 5];

(() => {
    let array = [];
    for (let i = 0; i < numbers.length; i++) {
        if (array.indexOf(numbers[i]) === -1) {
            array.push(numbers[i]);
        }
    }
    console.log(array);
})();
// ----------------------------------------------------

// 1.h.Rotate an array by k times
// Using Anonymous function

let rotate = function(arr, k) {
  let len = arr.length;
  for (let i = 0; i <= k; i++) {
      let temp = arr[len - 1];
      for (let j = len - 1; j => 0; j--) {
          arr[j] = arr[j - 1];
      }
      arr[0] = temp;
  }
  console.log(arr);
};

rotate([1, 2, 3, 4, 5] );
// -----------------------------------
// 1.h.Rotate an array by k times
// Using IIFE function

(function(arr, k) {
  let len = arr.length;
  for (let i = 0; i < =k; i++) {
      let temp = arr[len - 1];
      for (let j = len - 1; j >= 0; j--) {
          arr[j] = arr[j - 1];
      }
      arr[0] = temp;
  }
  console.log(arr);
})([1, 2, 3, 4, 5]);


