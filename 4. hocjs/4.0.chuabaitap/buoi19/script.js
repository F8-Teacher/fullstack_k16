//Bài 1

// function hasNegative(numbers) {
//   return numbers.some((number) => {
//     return number < 0;
//   });
// }
// console.log(hasNegative([1, 2, 3, -4]));
// console.log(hasNegative([1, 2, 3, 4]));

//Bài 2

// function isAllEven(numbers) {
//   return numbers.every((number) => {
//     return number % 2 === 0;
//   });
// }
// console.log(isAllEven([2, 4, 6]));
// console.log(isAllEven([2, 3, 6]));

//Bài 3

// function findDivisibleBy5(numbers) {
//   return numbers.find((number) => {
//     return number % 5 === 0;
//   });
// }
// console.log(findDivisibleBy5([2, 9, 15, 20]));

//Bài 4

// function findLastNegative(numbers) {
//   return numbers.findLast((number) => {
//     return number < 0;
//   });
// }
// console.log(findLastNegative([3, -2, 0, -7, 8]));

//Bài 5

// function findFirstOddIndex(numbers) {
//   return numbers.findIndex((number) => {
//     return number % 2 !== 0;
//   });
// }
// console.log(findFirstOddIndex([2, 4, 6, 7, 8]));

//Bài 6

// function findLastGreaterThan50(numbers) {
//   return numbers.findLastIndex((number) => {
//     return number > 50;
//   });
// }
// console.log([10, 60, 40, 80, 20]);
// console.log(findLastGreaterThan50([10, 60, 40, 80, 20]));

//Bài 7
// function sum(numbers) {
//   return numbers.reduce((acc, cur) => {
//     return acc + cur;
//   });
// }
// console.log(sum([2, 3, 4]));

//Bài 8
// function multiplyAll(numbers) {
//   return numbers.reduce((acc, cur) => {
//     return acc * cur;
//   });
// }
// console.log(multiplyAll([2, 3, 4]));

//Bài 9
// function longestStringLength(strings) {
//   return strings.reduce((acc, cur) => {
//     if (acc < cur.length) {
//       return cur.length;
//     }
//     return acc;
//   }, 0);
// }
// console.log(longestStringLength(["hi", "abc", "Xin chào", "a"]));

//Bài 10
//Số nguyên tố
// - > 1
// - Chỉ chia hết cho 1 và chính nó
// function isPrime(n) {
//   if (n < 2) {
//     return false;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// function hasPrime(numbers) {
//   return numbers.some((number) => {
//     return isPrime(number);
//   });
// }
// console.log(hasPrime([4, 6, 8, 9]));
// console.log(hasPrime([4, 5, 8, 10]));
