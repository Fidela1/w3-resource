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

// concat method

let text1 = 'Computer';
let text2 = 'Science';
let text3 = text1.concat('',text2);
console.log(text3);

// trim method used to remove space from both side of string

let sentence = "    Hello World    ";
let sentence1 = sentence.trim();
console.log(sentence1);

// trimEnd remove space on the end of string
let sentence2 = "    Hello World    ";
let sentence3 = sentence2.trimEnd();
console.log(sentence3);

//// padding method
// padding start
 let num1 = "6";
 let num2 = num1.padStart(4,"x");
 console.log(num2); // xxx6
 

 let num3 = "6";
 let num4 = num3.padStart(4,"0");
 console.log(num4); //0006

 // padding end
 let num5 = "6";
 let num6 = num5.padEnd(4,"6");
 console.log(num6); // 6666


 let num7 = "6";
 let num8 = num7.padEnd(4,"0"); 
 console.log(num8);  // 6000

 // charAt() method return character of specified position

 let snt = "Hello World";
 let snt1 = snt.charAt(0);
console.log(snt1); // H

// indexOf method return index of element

let snt3 = "Hello World";
 let snt4 = snt3.indexOf("World");
console.log(snt4); // 6

let snt5 = " Hello World";
 let snt6 = snt5.lastIndexOf("World");
console.log(snt6); // 7

// include return true if element is included

let txt = "Hello world, welcome to the universe.";
let txt1 = txt.includes("welcome");
console.log(txt1); // true

let txt2 = "Hello world, welcome to the universe.";
let txt3 = txt2.includes("fi");
console.log(txt3); // false

// startsWith method

let nm = "Hello World";
let nm1 = nm.startsWith("Hello");
console.log(nm1);  // true becouse it started by hello

// endsWith() method

let element = "Speak to me";
let element1 = element.endsWith("me",11);
console.log(element1);

// to change number to string
let x = 123;
let y = x.toString();
console.log(y);

// to round number 

let z = 9.256;
let q = z.toExponential();
console.log(q);

let w = 9.256;
console.log(w.toFixed());
console.log(w.toFixed(4));
console.log(w.toFixed(6));

// to check whether a string is blank or not.

const isBlank = (n) => {
if(n.length === 0){
    return true;
}
else{
    return false;
}
}
console.log(isBlank(''));
console.log(isBlank('bbb'))

//  split a string and convert it into an array of words

const stringToArray = (a) => {
return a.trim().split(" ");

};
console.log(stringToArray("john smith"));

// change first letter of string to capital
function toCapital(b){
    
    return b.charAt(0).toUpperCase() + b.slice(1);
}
console.log(toCapital('fidela'));

// return reversed string

const stringReverse = (nm) => {
    return nm.split('').reverse().join('');
}
console.log(stringReverse('hello'));

// alphabetical order

const alphabeticalOrder = (str) => {
    return str.split('').sort().join('');
}
console.log(alphabeticalOrder('bfga'));


const stringTruncate = (word,x) => {
    return word.split('').slice(0,x).join('');
}
console.log(stringTruncate("The Quick brown fox Running",20));

// to count vowels of a given string

const countVowels = (str) => {
    return str.match(/[iuoae]/gi).length;
}
console.log(countVowels('fidela'));

// to make first letter of a string in small leter

const toSmallLetter = (str) => {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log(toSmallLetter('Fidela'));