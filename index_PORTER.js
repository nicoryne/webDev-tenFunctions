document.querySelector(".side-panel-toggle").addEventListener("click", () => {
    document.querySelector(".wrapper").classList.toggle("side-panel-open");
});

/*1*/
const add = () =>{
    var str = document.getElementById("userInput").value;
    var numbers = str.split(",");
    var num1 = parseFloat(numbers[0]);
    var num2 = parseFloat(numbers[1]);
    sum = num1 + num2;
    document.getElementById("output").innerHTML = sum;
};

/*2*/
const strLength = () =>{
    var text = document.getElementById("userInput").value;
    var length = text.length;
    document.getElementById("output").innerHTML = length;
}

/*3*/
const getLargest = () =>{
    var str = document.getElementById("userInput").value;
    var numbers = str.split(",");
    var largest = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i]>largest){
            largest = numbers[i];
        }
    }
    document.getElementById("output").innerHTML = largest;
}

/*4*/
const returnEvenOdd = () => {
    const num = document.getElementById("userInput").value;
    if(num % 2 == 0){
        document.getElementById("output").innerHTML = "Even";
    }else{
        document.getElementById("output").innerHTML = "Odd";
    }
}
/*5*/
const returnStringA = () =>{
    const string = document.getElementById("userInput").value;
    var strArr = string.split(",");
    var newStrArr = [];
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i].includes('a')){
            newStrArr.push(strArr[i]);
        }
    }
    document.getElementById("output").innerHTML = newStrArr.join(", ");
}

/*6*/
const capitalize = () =>{
    const text = document.getElementById("userInput").value;
    capitalized = text.charAt(0).toUpperCase() + text.slice(1);
    document.getElementById("output").innerHTML = capitalized;
}

/*7*/
const addArray = () =>{
    var numbers = document.getElementById("userInput").value;
    var numArray = numbers.split(",");
    var sum = 0;
    for(let i = 0; i < numArray.length; i++){
        sum += parseFloat(numArray[i]);
    }
    document.getElementById("output").innerHTML = sum;
}

/*8*/
const getFactorial = () =>{
    var num = parseFloat(document.getElementById("userInput").value);
    if(num < 0){
        document.getElementById("output").innerHTML = "NULL";
    }
    if(num == 0 || num == 1){
        document.getElementById("output").innerHTML = 1;
    } else if(num>1){
        for(let i = num - 1; i >= 1; i--){
            num = num * i;
        }
        document.getElementById("output").innerHTML = num;
    }
}

/*9*/
const getEvenArray = () =>{
    var str = document.getElementById("userInput").value;
    var numbers = str.split(",");
    var evenArr = [];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 == 0){
            evenArr.push(numbers[i]);
        }
    }
    document.getElementById("output").innerHTML = evenArr.join(", ");
}

/*10*/
const removeVowels = () =>{
    var text = document.getElementById("userInput").value;
    document.getElementById("output").innerHTML =  text.replace(/[aeiou]/gi, '');
}

const removeVowel = (text) => {
    let result = "";
    const vowels = ["a", "e", "i", "o", "u"];
    
    for(let i = 0; i < text.length; i++){
        let char = text.charAt(i);
        if(vowels.indexOf(char.toLowerCase()) == -1){
            result += char;
        }
    }
    return result;
}

/*bonus*/
const isEven = (num) =>{
    return num % 2 == 0;
}



