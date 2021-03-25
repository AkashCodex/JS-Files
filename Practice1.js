let user={
    rollno:1,
    name:"Akash" 
 }
 




//function declaration
 //say
 function say1(){
    console.log("Hello1");
  }
   //add as method
  user.say1=say1;
   //call
  user.say1();

 //function declaration with access properties
 function say2(){
    console.log(user.name);
    console.log(user.rollno);
  }
  //add as method
  user.say2=say2;
  user.say2(); 


//function expression+Object
user.say3=function(){
   console.log("Hello2"); 
}

user.say3();
//function expression and getting properties access
user.say4=function(){
    console.log(user.name);
    console.log(user.rollno); 
 }

user.say4();
















 