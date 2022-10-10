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