//print vishal 5 times
/*for (let count=1;count <=5;count++){
    console.log("vishal");//5times exution
}
console.log("loop has ended");*/
//calculate sum of 1 to 5
/*let sum = 0;
for (let i =1; i <=5; i++){
  sum = sum +i;
}
console.log("sum is", sum);*/
//while loop
/*let i=1;
while(i <=5){
    console.log("vishal");
    i++;
}*/
// do while loop
/*let i=1;
/*do{
    console.log("vishal");
    i++;
}while(i <=5);*/
// for of loop
/*let str = "vishal";
let size= 0;
for (let i of str){ //itrrator -> each character
  console.log(i);
  size++;

}
console.log("size is", size);*/
//print even numbers from 1 to 100
/*for (let i=0; i<=100; i++){
  if (i % 2 === 0){
    console.log(i);
  }
}*/
// for in loop 
let student ={
    name: "vishal",
    age: 22,
    marks: 85,
    isPass : true,
};
for (let key in student){
    console.log (key);
}

