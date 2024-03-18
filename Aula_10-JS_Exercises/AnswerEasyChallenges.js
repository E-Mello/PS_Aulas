// ## 1. Operações bit a bit
// function bitwiseAND(n01, n02) {
//   return console.log(n01 & n02);
// }
// function bitwiseOR(n01, n02) {
//   return console.log(n01 | n02);
// }
// function bitwiseXOR(n01, n02) {
//   return console.log(n01 ^ n02);
// }

// bitwiseAND(7, 12);
// bitwiseOR(7, 12);
// bitwiseXOR(7, 12);

// ## 2. Some os números de um único número

// function addUp(num) {
//   let temp = 0;
//   let result = 0;
//   while (num >= 0) {
//     temp = num;
//     result += temp;
//     num--;
//   }
//   return result;
// }

// console.log(addUp(4));
// console.log(addUp(13));
// console.log(addUp(600));

// ## 3. Casas de palito de fósforo

// function matchHouses(num) {
//   return 5 * num + 1;
// }

// console.log(matchHouses(1));
// console.log(matchHouses(4));
// console.log(matchHouses(87));

// ## 4. Deslocamento para a esquerda por potências de dois
// function shiftToLeft(num01, num02) {
//   let exp = 2;
//   if (num02 > 1) {
//     for (let i = 1; i < num02; i++) {
//       exp *= 2;
//     }
//   }
//   let result = num01 * exp;
//   console.log(result);
// }
// shiftToLeft(5, 2);
// shiftToLeft(10, 3);
// shiftToLeft(-32, 2);
// shiftToLeft(-6, 5);
// shiftToLeft(12, 4);
// shiftToLeft(46, 6);

// ## 5. Recursão: deslocamento para a esquerda por potências de dois
// TODO: Make After
// function shiftToLeft(num01, num02) {
//   let exp = num02 - 1;
// }
// shiftToLeft(5, 2);

// ## 6. Encontre os menores e maiores números

// function minMax(arg) {
//   let minAndMax = [];
//   minAndMax.push(Math.min(...arg));
//   minAndMax.push(Math.max(...arg));
//   return minAndMax;
// }

// console.log(minMax([1, 2, 3, 4, 5]));
// console.log(minMax([2334454, 5]));
// console.log(minMax([1]));

// ## 7. É hora de leite e biscoitos?

// function timeForMilkAndCookies(arg) {
//   let month = arg.getMonth();
//   let day = arg.getDate();
//   if (month == 11 && day == 24) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(timeForMilkAndCookies(new Date(2013, 11, 24)));
// console.log(timeForMilkAndCookies(new Date(2013, 0, 23)));
// console.log(timeForMilkAndCookies(new Date(3000, 11, 24)));

// ## 8. Qual função retorna o número maior?

// function whichIsLarger(arg01, arg02) {
//   if (arg01() > arg02()) {
//     return "f";
//   } else if (arg02() > arg01()) {
//     return "g";
//   } else {
//     return "neither";
//   }
// }

// console.log(
//   whichIsLarger(
//     () => 5,
//     () => 10
//   )
// );

// console.log(
//   whichIsLarger(
//     () => 25,
//     () => 25
//   )
// );

// console.log(
//   whichIsLarger(
//     () => 505050,
//     () => 5050
//   )
// );

// ## 9. Converter um número em Base 2
// TODO: Make After
// function binary(arg) {

// }

// console.log(binary(1));
// console.log(binary(5));
// console.log(binary(10));

// ## 10. Verifique se um array pode ser aninhado em outro

// function canNest(arg01, arg02) {
//   if (
//     Math.min(...arg01) > Math.min(...arg02) &&
//     Math.max(...arg01) < Math.max(...arg02)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(canNest([1, 2, 3, 4], [0, 6]));
// console.log(canNest([3, 1], [4, 0]));
// console.log(canNest([9, 9, 8], [8, 9]));
// console.log(canNest([1, 2, 3, 4], [2, 3]));

// ## 11. Promises III: Promessa Nativa, Apresentando o Executor

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("edabit");
//     reject("failed");
//   }, 1000);
// });

// async function resolution(arg) {
//   let result = await arg;
//   console.log(result);
// }

// resolution(promise);

// ## 12. Número de quadrados em uma grade N \* N

// function numberSquares(arg) {
//   let previusValue = 0;

//   for (let i = 0; i <= arg; i++) {
//     let square = i * i;
//     let result = square + previusValue;
//     previusValue = result;
//   }
//   return previusValue;
// }

// console.log(numberSquares(2));
// console.log(numberSquares(4));
// console.log(numberSquares(5));

// ## 13. Soma da Resistência em Circuitos em Série

// function seriesResistance(args) {
//   let result = 0;
//   args.forEach((element) => {
//     result += element;
//   });
//   return result.toFixed(1) + " ohms";
// }

// console.log(seriesResistance([1, 5, 6, 3]));
// console.log(seriesResistance([16, 3.5, 6]));
// console.log(seriesResistance([0.5, 0.5]));

// ## 14. Maior troca

// function largestSwap(arg) {
//   let arr = Array.from(String(arg), Number);
//   let n01 = arr[0];
//   let n02 = arr[1];
//   let invertedNumbers = Number.parseInt(String(n02) + String(n01));
//   if (arg >= invertedNumbers) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(largestSwap(14));
// console.log(largestSwap(53));
// console.log(largestSwap(99));

// ## 15. O que está escondido entre a multidão?

// function detectWord(arg) {
//   let newArray = arg.split("");
//   let result = [];
//   newArray.forEach((element) => {
//     if (element.toLowerCase() === element) {
//       result += element;
//     }
//   });
//   return `"${result}"`;
// }

// console.log(detectWord("UcUNFYGaFYFYGtNUH"));
// console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));
// console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));

// ## 16. Hexadecimal para Binário

// function toBinary(arg) {
//   return parseInt(arg.toString(16), 16).toString(2);
// }

// console.log(toBinary(0xff));
// console.log(toBinary(0xaa));
// console.log(toBinary(0xfa));
