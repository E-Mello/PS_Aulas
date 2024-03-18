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
// function shiftToLeftRecursive(num01, num02) {
//   if (num02 === 0) {
//     return num01;
//   } else {
//     return shiftToLeftRecursive(num01 * 2, num02 - 1);
//   }
// }
// console.log(shiftToLeftRecursive(5, 2));
// console.log(shiftToLeftRecursive(10, 3));
// console.log(shiftToLeftRecursive(-32, 2));
// console.log(shiftToLeftRecursive(-6, 5));
// console.log(shiftToLeftRecursive(12, 4));
// console.log(shiftToLeftRecursive(46, 6));

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
// function binary(arg) {
//   return arg.toString(2);
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

// ## 17. Mais velho que eu

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   compareAge(arg) {
//     if (this.age > arg.age) {
//       return `"${arg.name} is younger than me"`;
//     } else if (this.age < arg.age) {
//       return `"${arg.name} is older than me"`;
//     } else {
//       return `"${arg.name} is the same age as me"`;
//     }
//   }
// }

// let p1 = new Person("Samuel", 24);
// let p2 = new Person("Joel", 36);
// let p3 = new Person("Lily", 24);

// console.log(p1.compareAge(p2));
// console.log(p2.compareAge(p1));
// console.log(p1.compareAge(p3));

// ## 18. Classificação de bebidas

/* 
A função passada para o método sort define como os elementos do array serão comparados. Ela recebe dois elementos (a e b) como parâmetros e retorna um valor que indica qual elemento deve ter precedência na ordenação:

Se a for menor que b: A função retorna um valor negativo.
Se a for maior que b: A função retorna um valor positivo.
Se a for igual a b: A função retorna 0.
*/

/**
 Se a diferença for negativa, significa que o preço de a é menor que o de b. Nesse caso, a deve ter precedência na ordenação e será colocado antes de b.
Se a diferença for positiva, significa que o preço de a é maior que o de b. Nesse caso, b deve ter precedência e será colocado antes de a.
Se a diferença for 0, significa que os preços de a e b são iguais. Nesse caso, a ordem não importa.
 */

/*
O método sort utiliza a função de comparação para comparar cada par de elementos do array. Ele itera pelo array e troca a posição dos elementos de acordo com o valor retornado pela função de comparação.
*/

/**
 Considerando os elementos a e b:

Se a.price for 20 e b.price for 30, a função retornará -10. Como é negativo, a terá precedência e será colocado antes de b.
Se a.price for 40 e b.price for 30, a função retornará 10. Como é positivo, b terá precedência e será colocado antes de a.
 */

/**
 Após a ordenação, o array drinks estará ordenado com os elementos do mais barato para o mais caro.
 */
// drinks = [
//   { name: "lime", price: 50 },
//   { name: "lemonade", price: 10 },
//   { name: "orange", price: 30 },
//   { name: "watermelon", price: 80 },
// ];

// function sortDrinkByPrice(args) {
//   const organize = args.sort(function (a, b) {
//     return parseFloat(a.price) - parseFloat(b.price);
//   });
//   return organize;
// }

// console.log(sortDrinkByPrice(drinks));

// ## 19. Coloque na matriz

// function tuckIn(arg01, arg02) {
//   let arr03 = arg01.concat(arg02.filter((item) => arg01.indexOf(item) < 0));
//   const organizeArr = arr03.sort(function (a, b) {
//     if (Object.prototype.toString.call(a && b) != "[object Array]") {
//       return a - b;
//     } else {
//       return a[0] - b[0];
//     }
//   });
//   //   const organizeArr = arr03.sort();
//   return organizeArr;
// }

// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(tuckIn([15, 150], [45, 75, 35]));
// console.log(
//   tuckIn(
//     [
//       [1, 2],
//       [5, 6],
//     ],
//     [[3, 4]]
//   )
// );
