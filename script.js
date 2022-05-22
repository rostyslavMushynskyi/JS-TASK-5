"use strict";

//TASK 1

let i = 0;
while (i < 10) {
  i++;
  console.log(i);
}

//TASK 2

let b = 0;
while (b < 10) {
  b++;
  if (b % 2 === 0) {
    console.log("Число парне");
  } else {
    console.log("Число не парне");
  }
}

//TASK 3

let num = 20;

while (num < 28) {
  num++;
  console.log(num);
}

//TASK 4

let hero = "";
do {
  hero = prompt("Введіть ім'я героя ");
  if (hero.length >= 6) {
    break;
  } else {
    console.log(hero);
  }
} while (hero.length <= 6);
