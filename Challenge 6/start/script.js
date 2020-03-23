/* CHALLENGE 6 - Arrow Functions

Use arrow functions instead of functions
where possible.
*/

"use strict";



let multAf = (a, b) => a * b;

setTimeout(() =>
  console.log(multAf(5, 10)), 1000);

// 50
