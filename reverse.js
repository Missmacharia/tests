// chaaning the different methods
//split()- converts string to an array
//reverse()-array method that reverses the array
// join()-joins the array back to a string
let word = 'Lorem at';
let secondWord= 'Tempor ip'
let word1 = word.split('').reverse().join('')
console.log(word1);
let myWord= secondWord.split('').reverse().join('')
console.log(myWord);

//reversing  a string
//decrementing for loop
 function reverseString(str){
    let newString =""
    for(let i= str.length-1; i> 0; i--){
        newString+= str[i]
    }
    return newString;
 }
console.log(reverseString(' Lorem at'));

function reverseString1(str){
    let newString=""
    for(let i=str.length-1; i>0; i-- ){
        newString+= str[i]
    }
    return newString;
}
console.log(reverseString1(' Tempor ip'));




//condition
function reverseString(str){
    if(str=== ""){
        return "";
    } else{
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}
console.log(reverseString('Lorem at'));

function reverseString2(str) {
    if (str==="") {
        return "";
    } else {
        return reverseString2(str.substr(1)) + str.charAt(0);
    }
}
console.log(reverseString2('Tempor it'));