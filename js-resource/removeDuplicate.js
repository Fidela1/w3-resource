// "Write a function, that removes all the duplicate letters in a string.
// Given a string N, return a string from N that contains no repeated letters"

// A function to remove duplicate
const removeDuplicate = (N) => {
    let a = N.split('');
    let uniqueNs = a.filter((element, index) => {
        console.log(element,"index:",a.indexOf(element))
        return a.indexOf(element) === index;
    });
    let uniqueN = uniqueNs.join("")
    return uniqueN

    }
   console.log( removeDuplicate('aabbcdmmrtt'));