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