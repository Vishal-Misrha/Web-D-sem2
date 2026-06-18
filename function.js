/*function myFunction() {
    console.log("Hello from myFunction!");
}

myFunction();
myFunction();*/
/*function greet(name) {
    console.log(name);
}
greet("Alice");*/
/*function add(a, b) {
    console.log(a + b);
}*/
//arrow function
/*const add = (a, b) => {
    console.log(a * b);
};
add(5, 10);*/
//Question print vowel in sentence
/*function countVowels(str) {
    let count = 0;
    for(const char of str ){
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
            char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            count++;
        }
    }
   console.log("Number of vowels:", count);
}*/
// for each loop
/*let array = [1, 2, 3, 4, 5];
array.forEach(function printval(val) {
    console.log(val);
});*/
/*let array = ["apple", "banana", "cherry"];
array.forEach((val,idx,arr) => {
    console.log(idx, val, arr);
});*/
// sq of each no by using for eachloop
/*let num = [1, 2, 3, 4, 5];
num.forEach((num) => {
    console.log(num * num);
};*/
//map method
/*let num = [1, 2, 3, 4, 5];
let sqnum = num.map((num) => {
    return num * num;
});
console.log(sqnum);*/
//filter method
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evennum = num.filter((num) => {
    return num % 2 === 0;
});
console.log(evennum);
let oddnum = num.filter((num) => {
    return num % 2 !== 0;
});
console.log(oddnum);




