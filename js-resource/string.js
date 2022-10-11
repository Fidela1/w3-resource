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
