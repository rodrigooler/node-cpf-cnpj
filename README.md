# node-cpf-cnpj
Module CPF-CNPJ Brazil

# Module in construction

## Install Global
```shell
npm i -g node-cpf-cnpj
```

## Install Project
```shell
npm i --save node-cpf-cnpj
```

```js

"use strict";

const cpf = require('node-cpf-cnpj');

// Perform validation and returns true if it is valid
// Example return true
console.log(cpf.isValid('146.278.545-01'));

// Remove the special characters of the CPF mask
// Example return 14627854501
console.log(cpf.strip('146.278.545-01'));

// Effects the generation of a valid CPF unmasked formatting
// Example return 68313530294
console.log(cpf.generate(false));

// Effects the generation of a valid CPF with mask formatting
// Example return 683.135.302-94
console.log(cpf.generate(true));

// Performs the CPF mask generation
// Example return 146.278.545-01
console.log(cpf.format('14627854501'));

```

## Author
Rodrigo Oler

## Github
https://github.com/RodrigoOler

## NPM
https://www.npmjs.com/package/node-cpf-cnpj


The MIT License (MIT)

Copyright (c) 2016 Rodrigo Oler

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
