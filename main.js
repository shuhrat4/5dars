// 1

// let userList = [
//   {
//     id: 1,
//     name: "Botir",
//     age: 20,
//     hobby: "Football",
//   },
//   {
//     id: 2,
//     name: "Anvar",
//     age: 22,
//     hobby: "Basketboll",
//   },
//   {
//     id: 3,
//     name: "Shohruh",
//     age: 20,
//     hobby: "Basketboll",
//   },
//   {
//     id: 3,
//     name: "Akram",
//     age: 20,
//     hobby: "Football",
//   },
// ];

// let usersHobby = (users) => {
//   let matches = [];
//   users.forEach((user) => {
//     let matchingUsers = users.filter(
//       (u) => u.age === user.age && u.hobby === user.hobby && u.id !== user.id
//     );
//     if (matchingUsers.length > 0) {
//       matches.push(user.name);
//     }
//   });
//   return [...new Set(matches)];
// };

// let names = usersHobby(userList);

// names.forEach((name) => console.log(name));

// 3

// let numbers = [43,12,56,32,12,44, 23]

// function changeArr(arr){
//     let max = arr[0]
//     for(let num of arr){
//         if(num >= max){
//             max = num
//         }
//     }
//     arr.unshift(max)
//     return arr;
// }
// let res = changeArr(numbers)
// console.log(res);

// 5
// function son() {
//     let input = prompt("Iltimos, son kiriting:");
//     let number = parseInt(input, 10);
//        if (isNaN(number) || number <= 0) {
//         console.log("Iltimos, to'g'ri musbat son kiriting.");
//         return;
//     }
//     let array = [];
//     for (let i = 1; i <= number; i++) {
//         array.push(i);
//     }
//     let reversedArray = array.reverse();

//     return reversedArray;
// }

// let result = son();
// console.log(result);

// //// //// 6-rasm//////////////////////

// 1
// function son(param1, param2) {
//     let number1 = parseFloat(param1);
//     let number2 = parseFloat(param2);
//     return number1 + number2;
// }
// function num() {
//      let input1 = prompt("Iltimos, birinchi sonni kiriting:");
//     let input2 = prompt("Iltimos, ikkinchi sonni kiriting:");
//     let result = son(input1, input2);
//     console.log(`Natija: ${result}`);
// }
// num();

// 2
// function sum(numbers) {
//        return numbers.reduce((accumulator, current) => {
//               if (typeof current === 'number') {
//             return accumulator + current;
//         }
//         return accumulator;
//     }, 0);
// }
// let array = [1, 2, 3, 4, 5, 6];
// let result = sum(array);

// console.log(`Arraydagi barcha sonlarning yig'indisi: ${result}`);

// 3
// function sum(numbers) {
//     return numbers.filter(number => number > 0);
// }
// let mixedArray = [1, -2, 3, -4, 5, 0, -6, 7];
// let positiveNumbers = sum(mixedArray);
// console.log(`Musbat sonlar: ${positiveNumbers}`);

// 4
// function num(arr) {
//     return arr.map(element => {
//             if (typeof element === 'string') {
//                     let num = Number(element);
//                      return !isNaN(num) ? num : 0;
//         }
//           return element;
//     });
// }
// let arr = ["5", 2, "true", "salom"];
// let son = num(arr);

// console.log(`O'zgartirilgan array: ${son}`);

// 5

// function num(people) {
//     for (let i = 0; i < people.length; i++) {
//         if (people[i].status === false) {
//             console.log(people[i].name);
//         }
//     }
// }
// let people = [
//     { name: "Abdulloh", age: 19, status: false },
//     { name: "Ibrohim", age: 20, status: true },
//     { name: "Shodiyor", age: 18, status: false }
// ];
// num(people);

// 6
// function num(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum / numbers.length;
// }
// let num1 = parseFloat(prompt("Birinci sonni kiriting:"));
// let num2 = parseFloat(prompt("Ikkinchi sonni kiriting:"));
// let num3 = parseFloat(prompt("Uchinchi sonni kiriting:"));
// let numbersArray = [num1, num2, num3];
// let average = num(numbersArray);
// console.log("Uchta sonning o'rtacha arifmetik qiymati:", average);

// 7
// function son(array) {
//     if (array.length === 0) {
//         console.log("Array bo'sh!");
//         return;
//     }

//     let firstElement = array[0];

//     if (firstElement % 2 === 0) {
//         array[0] = firstElement + 1;
//     } else {
//         array[0] = firstElement + 1;
//     }

//     return array;
// }
// let exampleArray = [4, 7, 2, 9];
// let adjustedArray = son(exampleArray);
// console.log("Yangilangan array:", adjustedArray);

// 8
// function son(array1, array2) {
//     let set1 = new Set(array1);
//     let set2 = new Set(array2);
//     let commonValues = [...set1].filter(item => set2.has(item));
//     console.log("Bir xil qiymatlar:", commonValues);
// }
// let array1 = ["apple", "banana", "cherry", "date"];
// let array2 = ["banana", "date", "fig", "grape"];
// son(array1, array2);
