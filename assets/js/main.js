

var myNum = 10;
var myStr = 'строка';
var myBool = true;
var myArr = [1, 2, 3, 4, 5];
var myObj = {
  first: 'First Name',
  last: 'Last Name'
};

console.log('myNum: ', myNum);
console.log('myStr: ', myStr);
console.log('myBool: ', myBool);
console.log('myArr: ', myArr);
console.log('myObj: ', myObj);



var decimal2 = myNum.toFixed(2);
console.log('decimal2: ', decimal2);


var i = 0;

console.log('первый элемент: ', i);
console.log('префиксный инкремент: ', ++i);
console.log('постфиксный инкремент: ', i++);
console.log('значение i: ', i);
console.log('префиксный декремент: ', --i);
console.log('постфиксный декремент: ', i--);
console.log('значение i: ', i);


var myTest = 20;

myTest += myNum;
console.log('+=', myTest);
// +=

myTest -= myNum;
console.log('-=', myTest);
// –=

myTest *= myNum;
console.log('*=', myTest);
// *=

myTest /= myNum;
console.log('/=', myTest);
// /=

myTest %= myNum;
console.log('%=', myTest);
// %=




var myPi = Math.PI;
console.log('myPi: ', myPi);

var myRound = Math.round(89.279);
console.log('myRound: ', myRound);

var myRandom = Math.random() * 10;
console.log('myRandom: ', myRandom);
// случайное число между 0..10 → myRandom

var myPow = Math.pow(3, 5);
console.log('myPow: ', myPow);
// 3 в 5 степени → myPow



var strObj = { str: 'Мама мыла раму, рама мыла маму' };
strObj.length = strObj.str.length;

console.log('strObj: ', strObj);



var isRamaPos = strObj.str.indexOf('рама');
console.log('isRamaPos: ', isRamaPos);



var strReplace = strObj.str.replace('мыла', 'моет');
strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');
console.log('strReplace: ', strReplace);



console.log(strObj.str.toUpperCase());
console.log(strObj.str.toLowerCase());

