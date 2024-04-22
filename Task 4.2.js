// 1.a Print odd numbers in an array 
// // using arrow function
let numbers = [1, 3, 4, 5,11,15 ,6, 7, 8, 9, 10];
let sum = (arr) =>{
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
}
sum(numbers);
console.log(sum);

// -------------------------------------------------------------
// 2.Convert all the strings to title caps in a string array
//  using IIFE function:

let ab = ["hi", "guvi", "students"];
let newArray = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
   }     
 }
 newArray(ab);
console.log(ab);
// -----------------------------------------------------------------
// c. Sum of all numbers in an array
// using arrow function
let array = [1, 2, 3, 4, 5];
((arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total+ arr[i];
    }
    console.log(total);
})(array);
// ------------------------------------------
// // d.Return all the prime numbers in an array
// // using arrow function

let getPrimes = arr => {
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
    console.log(primes);
};
getPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 1.e Return all the palindromes in an array
// Using arrow function

let a = ["malayalam", "doll", "madam"];
let palindromes = a => {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        let word = a[i];
        if (word === word.split('').reverse().join('')) {
            result.push(word);
        }
    }
    console.log(result);
};

palindromes(a);



