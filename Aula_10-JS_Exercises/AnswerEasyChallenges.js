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
function shiftToLeft(num01, num02) {
  let exp = num02 - 1;
}
shiftToLeft(5, 2);
