//===> normal function 
// function add(a, b){
//      // const sum = a + b; or 
//      return a + b;
// }

// const number = add(2,5);
// console.log(number)

//===> function Experssion

// const add = function(num1 , num2){
//      // const sum = num1 + num2; or
//      return num1 + num2;
// }

// const number = add(10, 60);
// console.log(number)


//===> Arrow function

// const add2 = (num1 , num2) => num1 + num2;

// const sum = add2(66, 44);
// console.log(sum) 

//===>  arrow function

const multiply = ( num1, num2, num3, num4) => num1 * num2 * num3 * num4;

const number = multiply(2, 1, 8, 5 )
// console.log(number)

// single parameter function
const student ={
     name : 'ahadg',
     age : 23,
}
const getAge = (person) => person.age;

const age = getAge(student);
// console.log(age)

// single parameter function
const array =[21, 66, 74, 89, 102];

const getIndex = Array => Array[3];

const result = getIndex(array);
// console.log(result)

