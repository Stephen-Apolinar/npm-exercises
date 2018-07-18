const $ = require('jquery');
let sayHi = () => 'Hello';
console.log(sayHi());

import sayHello from './say-hello.js';
console.log(sayHello());

$("body").css("background-color", "red");