"use strict";

const now = new Date();
const now1 = new Date(2020, 5, 1, 20);
const now2 = new Date(0);
const now3 = new Date(-999999999999);

console.log(now); // Wed Apr 13 2022 20:06:16 GMT+0300 (Moscow Standard Time)
console.log(now1); // Mon Jun 01 2020 20:00:00 GMT+0300 (Moscow Standard Time)
console.log(now2); // Thu Jan 01 1970 03:00:00 GMT+0300 (Moscow Standard Time)
console.log(now3); // Mon Apr 25 1938 01:13:20 GMT+0300 (Moscow Standard Time)

console.log(now.getFullYear()); // 2022
console.log(now.getMonth()); // 3
console.log(now.getDate()); // 13
console.log(now.getDay()); // 3 среда
console.log(now.getHours()); // 20
console.log(now.getUTCHours()); // 17

console.log(now.getTimezoneOffset()); // -180
console.log(now.getTime()); // 1649870125786

console.log(now.setHours(18));
console.log(now); // Wed Apr 13 2022 18:17:20 GMT+0300 (Moscow Standard Time)

console.log(now.setHours(40));
console.log(now); // Thu Apr 14 2022 16:20:05 GMT+0300 (Moscow Standard Time)

// newDate = new Date.parse("2020-05-01");
// console.log(newDate);

let start = new Date();

for (let i = 0; i < 100000; i++) {
  let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} милисекунд`);