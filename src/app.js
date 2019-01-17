//it needs to import if you want to use jquery in this file
import $ from 'jquery';

//Testing momentjs
//All locales are loaded!!!
var moment = require('moment');
console.log(moment().format());

//Testing jquery
console.log($(this));

//Objects x Arrays in JS
var obj = {
           0: 'Banana',
           1: 'Orange',
           2: 'Grapes'
         };
var arr = [
           'Banana',
           'Orange',
           'Grapes'
          ];

console.log(obj);
console.log(arr);

console.log(obj[0]);
console.log(arr[0]);

console.log(Object.keys(obj))
console.log(Object.keys(arr));
