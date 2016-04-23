"use strict";

const IGNORELIST = [
  '00000000000',
  '11111111111',
  '22222222222',
  '33333333333',
  '44444444444',
  '55555555555',
  '66666666666',
  '77777777777',
  '88888888888',
  '99999999999',
  '12345678909'
];

let checkDigit = (numbers) => {
  numbers = numbers.split("").map((number) => parseInt(number, 10));

  let modulus = numbers.length + 1;

  let multiply = numbers.map((number, index) => number * (modulus - index));

  let mod = multiply.reduce((buffer, number) => buffer + number) % 11;

  return (mod < 2 ? 0 : 11 - mod);
};

let CPF = {};

CPF.strip = (number) => (number || "").toString().replace(/[^\d]/g, "");

CPF.format = (number) => CPF.strip(number).replace(
  /^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");

CPF.isValid = (number) => {
  let stripped = CPF.strip(number);

  if (!stripped) return false;

  if (stripped.length !== 11) return false;

  if (IGNORELIST.indexOf(stripped) >= 0) return false;

  let numbers = stripped.substr(0, 9);
  numbers += checkDigit(numbers);
  numbers += checkDigit(numbers);

  return numbers.substr(-2) === stripped.substr(-2);
};

CPF.generate = (formatted) => {
  let numbers = "",
    i = 0;

  while (i < 9) {
    numbers += Math.floor(Math.random() * 9);
    i++;
  }

  numbers += checkDigit(numbers);
  numbers += checkDigit(numbers);

  return (formatted ? CPF.format(numbers) : numbers);
};

module.exports = CPF;
