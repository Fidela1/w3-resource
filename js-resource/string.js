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
console.log(alphabeticalOrder('nmabdcef lgjh'));


const stringTruncate = (word,x) => {
    return word.split('').slice(0,x).join('');
}
console.log(stringTruncate("The Quick brown fox Running",20));

// to count vowels of a given string

const countVowels = (str) => {
   let count = str.match(/[iuoae]/gi);
if(count === null){
    return 0;
}
else{
return count.length;
}
}
console.log(countVowels('fidela'));

// to make first letter of a string in small leter

const toSmallLetter = (str) => {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log(toSmallLetter('Fidela'));

// to make array of vowels in a given

const arrayOfVowel = (str) => {

let vwl = str.match(/[iuoae]/gi);
if(vwl === null){
    return 0;
}
else{
    return vwl;
}
}
console.log(arrayOfVowel('Tuyizere Fidela'));

// find greatest string in a given string

const findGreatest = (str) => {
    let word1 = str.split(' ');
    let longest = ""; // creation of variable that will hold largest value
    for(let i = 0; i < word1.length; i++){
        if(word1[i].length > longest.length){   // check largest
            longest = word1[i]; 
        }
    }
    return longest;
}
console.log(findGreatest('Fidela Tuyizere'));

// to make vowels into capital letter
// var sen = prompt("enter value");
const vowelToCapital = (str) => {
var vc = str.split('');

for(let i = 0; i < vc.length; i++){
    if(vc[i] === "i"){
        vc[i] = vc[i].toUpperCase();
    }
    else if(vc[i] === "u"){
        vc[i] = vc[i].toUpperCase();
    }
    else if(vc[i] === "o"){
        vc[i] = vc[i].toUpperCase();
    }
        else if(vc[i] === "a"){
            vc[i] = vc[i].toUpperCase();
        }
            else if(vc[i] === "e"){
                vc[i] = vc[i].toUpperCase();
}
else{
    vc[i] = vc[i].toLowerCase();
}
}
let b = vc.join('');
return b;
}
console.log(vowelToCapital("fidela tuyizere"));

// count duplication 
// "Write a function, that removes all the duplicate letters in a string.
// Given a string N, return a string from N that contains no repeated letters"


const countDuplication = (n) => {
    let double = [];
    let duplicate = n.split('');
    for(const item of duplicate){
        if(double[item]){
            double[item]++;
        }
        else{
            double[item] = 1;
        }
    }
    console.log(double);
}
countDuplication('acdvfaa');

const toCapita = (str) => {
   
    let s = str.split(' ');
    let b = [];
    console.log(s);
    for(let i =0; i< s.length; i++){
       let a = s[i].charAt(0).toUpperCase()+s[i].slice(1);
       console.log(a);
     b.push(a);
    console.log(b.join(' '));
}
}
toCapita("fidela tuyizere");


// to make third letter to capital

const thirdLetter = (str) => {
    let n = str.split(' ');
    let rv = [];
    for(let i = 0; i<n.length; i++){
    let f = n[i].split('').map(function(a,b) {
        if(b == 2){
            return (a+'').toUpperCase();
        }
        else{
            return (a+'').toLowerCase();
        }
    
    });
    // console.log(f.join(''));
    rv.push(f.join(''));

}
console.log(rv.join(' '));
}
thirdLetter('none');

// find greatest number
const greatestNumber = (o) => {
    let larg = 0;
    for(let i = 0; i < o.length; i++){
        if(o[i] > larg){
            larg = o[i];
            
        }
        
    }
    return larg;
}

console.log(greatestNumber([1,2,34,3]));

const capitalizeEachLetter = (str) => {
let a = str.charAt(0).toUpperCase() + str.slice(1);
console.log(a);
}
capitalizeEachLetter('john smith');

// reverse a given number

const reverseNumber = (n)=> {
    n=n+"";
    let mn = n.split('');
    let re = mn.reverse();
    let wq = re.join('');
    return wq;
}
console.log(reverseNumber(32243));

// find longest word

const findLongestWord = (n) => {
    let a = n.split(' ');
    let longer ="";
    for(let i = a; i>0; i++){
        if(a[i].length < longer.length){
            longer = a[i];
        }
        
    }
    console.log(longer); 
}
findLongestWord('the quick brown fox');

// filter method

const ages = [23,45,1,20,3];
const checkAdult = (age) =>{
    return age > 18;
}

let r = ages.filter(checkAdult);
console.log(r);

// find even number
const nn = [23,45,1,20,3,24];

const checkEvn = (num) => {
    return num % 2 == 0;
}
let s = nn.filter(checkEvn);
console.log(s);

const color = ['red','blue','green','bob'];
let checkColor = color.filter(function(item){
    return item.length > 3;
});
console.log(checkColor)

const numbers = [34,23,45];
let sum = 0;
numbers.forEach(findAdditon);

function findAdditon(item){
    sum +=item;
}
console.log(sum);

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

let std = ['anne','aline','alice'];

 std.forEach(displayNames);

 function displayNames(item){
    console.log(item)
 }

 let stds = ['Anne','Aline','Alice'];

 stds.forEach(displayName);

 function displayName(item,index,arr){
    arr[index] = 'Hello ' +item
 }
 console.log(stds);


 // Find the highest value in an array
function maximums(input) {
    if (toString.call(input) !== "[object Array]")  
      return false;
 return Math.max.apply(null, input);
   }

console.log(maximums([12,34,56,1]));
console.log(maximums([-12,-34,0,-56,-1]));


var xi,yi,chr;
for(xi=1; xi <=6; xi++)
{
   for (yi=1; yi < xi; yi++)
     {
    chr=chr+("*");        
      }
 console.log(chr);
 chr='';    
    }

    // find the shortest word in a string

    function findShortestWord(str) {
        var words = str.split(' ');
        var shortest = words.reduce((shortestWord, currentWord) => {
          return currentWord.length < shortestWord.length ? currentWord : shortestWord;
        }, words[0]);
        return shortest;
      }
      console.log(findShortestWord("The quick brown fox jumped over the lazy dog"));

    //   Validate whether a given value type is NaN or not

      function is_nan(val)
        {
        return val !== val;
       }

console.log(is_nan(NaN));

// count number of consonants are in a string
function consonants(str) {
    var countConsonants = 0;
  
    for (var i = 0; i <= str.length; i++) {
  
      if (str[i] !== "a" || str[i] !== "e" || str[i] !== "i" ||
        str[i] !== "o" || str[i] !== "u" || str[i] !== " ") {
        countConsonants += 1;
      }
    }
    console.log(countConsonants);
  }
  consonants("asdfghaaa");
  
//   Write a JavaScript function that generates all combinations of a string.
  function substrings(str1)
  {
  var array1 = [];
    for (var x = 0, y=1; x < str1.length; x++,y++) 
    {
     array1[x]=str1.substring(x, y);
      }
  var combi = [];
  var temp= "";
  var slent = Math.pow(2, array1.length);
  
  for (var i = 0; i < slent ; i++)
  {
      temp= "";
      for (var j=0;j<array1.length;j++) {
          if ((i & Math.pow(2,j))){ 
              temp += array1[j];
          }
      }
      if (temp !== "")
      {
          combi.push(temp);
      }
  }
    console.log(combi.join("\n"));
  }
  
  substrings("dog");
  

// Find the sum of squares of a numeric vector

function sum_sq(array) {
    var sum = 0, 
        i = array.length;
    while (i--) 
     sum += Math.pow(array[i], 2);
    return sum;
  }
   
  console.log(sum_sq([0,1,2,3,4])); 

//   Get the first element of an array

  var is_array = function(input) {
    if (toString.call(input) === "[object Array]")
      return true;
    return false;   
      };
  console.log(is_array('w3resource'));
  console.log(is_array([1, 2, 4, 0]));
  