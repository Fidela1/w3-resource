const arr=[1,3]
console.log("arr:-",arr)

const typeOfElement = (a) => {
 console.log('this is ',typeof(a));
}
typeOfElement('James');

// to check if input is array

const check = (arr) => {
    if (Array.isArray(arr)){
        return true;
    }
    else{
        return false;
    }
}
console.log(check([1,23,4,5]));
console.log(check ('allene'));

// to get first element of array
 
const first = [1,2,3,4];
const findFirst = first[0];
console.log('first value',findFirst);

const getFirst = () => {
const get = ['java','html','css'];
const firstValue = get.slice(0,1);
console.log('the first value is',firstValue);
}
getFirst();

const getFirs = () => {
    const get = ['javaScript','html','css'];
    const firstValue = get.shift();
    console.log('the first value is',firstValue);
    }
    getFirs();

    // and operator

    const testLogicalAnd = (val) => {
    
        if (val <= 50 && val >=25) {
          
            console.log("yes");
          }
        
        console.log("No");
      }
      
      testLogicalAnd(10);

    //   Comparisons with the Logical Or Operator

      const testLogicalOr = (val) => {
      
        if (val >20 || val<10 ) {
            console.log("Outside");
        }
       console.log("Inside");
      }
      
      testLogicalOr(15);

      function duplicate(arr) {
        return arr.concat(arr);
      }
      
      console.log(duplicate([1, 2, 3, 4, 5]));


    // sort array element 


      const checkEven = (n) =>{
        if(n%2 === 0){
           console.log('the number is even');
        }
      else{
          console.log('the number is not even');
      }
      }
checkEven(90);

// product of two numbers

function myFunction(a,b){
  return a*b;
}
console.log('the product of two numbers',myFunction(4,3));

// to convert fahrenheit to celsius

const toCelsius = (fahrenheit) =>{
  return (5/9) * (fahrenheit-32);
}
console.log(toCelsius(77));

/// to sort array element
const fruit1 = ["mango","banana","lemon"];
const fruit2 = fruit1.sort();
console.log(fruit2);

// sort array element in ascending order

const point = [40,50,10,20,70];
point.sort(function(a,b){return a-b});
console.log(point);

// to sort in descending order
const poin = [40,50,10,20,70];
poin.sort(function(a,b){return b - a});
console.log(poin);

// to find largest number in array

const nbr = [34,56,32,1,90,70];
  let largest =0;
  for(let i = 0;i < nbr.length;i++){
    if(nbr[i]>largest){
      largest = nbr[i];
    }
  }

console.log('Largest number ',largest);

const arrayNumber = [20,30,5,100,70];
arrayNumber.sort(function(a,b){ return b - a});
let larg = arrayNumber[0];
console.log('largest number ',larg);

// find smallest number
const arrayNumbers = [20,30,5,100,70];
arrayNumbers.sort(function(a,b){ return a - b});
let small = arrayNumbers[0];
console.log('smallest number ',small);


// find largest number
const max = [1,2,3,4,5];

function findMaximum(arr){
  return Math.max.apply(null,arr);
}
let maximum = findMaximum(max);
console.log('largest number is',maximum);

// find small number
const min = [20,10,30];
function findMinimum(arr){
  return Math.min.apply(null,arr);
}
let minimum = findMinimum(min);
console.log('small number is',minimum);


const number1 = [5,6,78,12];
const number2 = number1.map(myFunction);

function myFunction(value,index,arr){
  console.log(value * 2);
}



// to find power of given number

const findSquare = (twice) => {
console.log(twice * twice);
}
findSquare(3);

let power = Math.pow(5,2);
console.log("the power of number is",power);

// to find square root

let root = Math.sqrt(144);
console.log('the square root is',root);


// find product of array number
const findProduct = (arr) => {
  
  let product = 1;
  for (let i = 0; i < arr.length; i++){
    product = product * arr[i];
  }
  console.log(product);
}
findProduct([3,4,5,6]);

// find sum 

const findSum = (arr) => {
  let sum = 0;
  let average;
  for (let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
    average = sum/arr.length;
  }
  console.log(sum);
  console.log(average);

}
findSum([2,4]);

// find area of rectangle

const findArea = (a,b) => {
  let area;
  area = (a*b)/2;
  console.log(area);
}
findArea(2,4);

// Get the last element of an array

var last =  function(array, n) {
  if (array == null) 
    return void 0;
  if (n == null) 
     return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));  
  };

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

// find duplicate values in a array

function find_duplicate_in_array(arra1) {
  var object = {};
  var result = [];

  arra1.forEach(function (item) {
    if(!object[item])
        object[item] = 0;
      object[item] += 1;
  })

  for (var prop in object) {
     if(object[prop] >= 2) {
         result.push(prop);
     }
  }

  return result;

}

console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));

// converting a number to a string with base different base

var num = 213;
console.log('213 in base 16 =',num.toString(16));
console.log('213 in base 2 =',num.toString(2));

// filter out the element of a given array, that have one of the specified values
const without = (arr, ...args) => arr.filter(v => !args.includes(v));

console.log(without([2, 1, 2, 3], 1, 2));
console.log(without([2, 1, 2, 3], 3));

//sort array in descending order
function sortNumbers(arr){

  const isPrime = n => {
      if (n===1){
      return false;
      }else if(n === 2){
         return true;
      }else{
         for(let x = 2; x < n; x++){
            if(n % x === 0){
               return false;
            }
         }
         return true;
      }
  }
   
  
      for (let i = 0; i < arr.length; i++) {
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
              w = arr[i];
              arr[i] = arr[j];
              arr[j] = w;
            }
        }
        }
       
      
  const filterPrime = arr => {
      const filtered = arr.filter(el => !isPrime(el));
      return filtered;
   }
  console.log(filterPrime(arr));
}

//sort array in descending order
function sortNumbers(arr){

  const isPrime = n => {
      if (n===1){
      return false;
      }else if(n === 2){
         return true;
      }else{
         for(let x = 2; x < n; x++){
            if(n % x === 0){
               return false;
            }
         }
         return true;
      }
  }
   
  
      for (let i = 0; i < arr.length; i++) {
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
              w = arr[i];
              arr[i] = arr[j];
              arr[j] = w;
            }
        }
        }
       
      
  const filterPrime = arr => {
      const filtered = arr.filter(el => !isPrime(el));
      return filtered;
   }
  console.log(filterPrime(arr));
  }
  sortNumbers([1,2,3,4,5,6,10,11]);