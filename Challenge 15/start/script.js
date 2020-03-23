/* CHALLENGE 15 - Iterate over String

Count number of the lowercase vowel letters in the string.
Vowel letters - a, e, i, o, u
*/

"use strict";

var vowelsCount = 0;
var vowels = ["a", "e", "i", "o", "u"];

var str = new String("Today is best day of my life");
for (let caract of str) {
    if (vowels.indexOf(caract) !== -1) vowelsCount++;
}

// Write code here
// for (let i = 0; i <= str.length; i++) {
//     if (vowels.includes(str[i])) {
//         vowelsCount++;
//     }
// }
// var arrFromStr = str.split('');
// arrFromStr.forEach(cart => { if (vowels.includes(cart)) { vowelsCount++ } })
// console.log(arrFromStr);
console.log(vowelsCount);
// 8
