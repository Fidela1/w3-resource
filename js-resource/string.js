const str ="Hello";
const str1 = "world";
console.log("str:", str)
console.log('str1 = ',str1)


// assign property object to object

const student = {};
student["name"] = 'ARC';
student.lastName = 'tutoliar';
console.log(student);

// join all elements of the following array into a string
const myColour = ["red","blue","green"];
console.log(myColour.toString());
console.log(myColour.join());
console.log(myColour.join('+'));

// break and continue

function find(){
for (let i = 0; i<10; i++){
    if(i == 5){
        break;
    }
    if(i == 4){
        continue;
    }
    console.log(i);
}

}
find();

// slice method

let fruits = 'Banana,Orange,Apple';
let fruit = fruits.slice(7,13);
console.log(fruit);


// 
let frui = 'Banana,Orange,Apple';
let fru = frui.slice(-12,-6);
console.log(fru);

let fr = 'Banana,Orange,Apple';
let f = fr.slice(14);
console.log(f);

// substring method
let c = 'Banana,Orange,Apple';
let t = c.substring(7,13);
console.log(t);


// substr method
let e = 'Banana,Orange,Apple';
let d = e.substr(7);
console.log(d);

// replace method

let text = 'Please visit Microsoft';
let newText = text.replace('Microsoft','Website');
console.log(newText);
