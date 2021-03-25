
//2 syntax
let arr1=new Array();
let arr2=[];


//most of the time we use 2nd one syntax

let arr=[1,"gdhj",23,56.78];

//wanna iterate over this array
//dynamic typed array ??
for(let i=0;i<arr.length;i++){
   console.log(arr[i]); 
}


//can also enter object inside an array and in that object you can declare a function too
let arr5=[2,3,4.7,"sdsd",{name:"ak",say(){console.log("jkjkj")}}];

for(let i=0;i<arr5.length;i++){
    console.log(arr5[i]); 
 }