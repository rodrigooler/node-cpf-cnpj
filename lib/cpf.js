"use strict";

var IGNORELIST = [
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

var checkDigit = function(numbers) {
  numbers = numbers.split("").map(function(number) {
    return parseInt(number, 10);
  });

  var multiply = numbers.map(function(number, index) {
    return number * (number.length + 1 - index);
  });

  var mod = multiply.reduce(function(buffer, number) {
    return buffer + number;
  }) % 11;
};

var CPF = {};



module.exports = {
  format: (number) => {
    return this.strip(number).replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/,
      "$1.$2.$3-$4");
  },

  strip: function(number) {
    var stripped = this.strip(number);

    if (!stripped) return false;

    if (stripped.length !== 11) return false;

    if (IGNORELIST.indexOf(stripped) >= 0) return false;

    var numbers = stripped.substr(0, 9);

  }
};
