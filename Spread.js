const maxNumber = Math.max(55, 6 ,44, 87, 14 ,201, 5);
// console.log(maxNumber)

const array = [56, 9, 98, 102, 741, 1];
console.log(Math.max(...array));

const number = [4, 6, 3, 1];

const number2 = number;
number2.push(5, 3);
// console.log(number)

const nayikas=['mousumi' , 'popy' ,'shabnur', 'purnima' ];
const array2 = [...nayikas];
console.log(array2);

const mobile = {
     brand: 'Samsung',
     model:'S4'
    };
    delete mobile.model;
//     console.log(mobile)
const obj = { foo: 1 };
obj.bar = 2;
console.log(obj);