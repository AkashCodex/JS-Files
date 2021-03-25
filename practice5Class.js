class User{
    //constructor syntax 1
    constructor(name){
       this.name=name; 
    }

     sayHiUser() {
      console.log(" Hello "+this.name);  
    }

    sayHi(){
       console.log(" Hi "+this.name); 
    }
}

let obj1 = new User("John");
obj1.sayHiUser();




//object 1 syntax
new User("Kekda").sayHi();
//object 2 syntax
let obj2 = new User("John");
obj2.sayHi();




/*
class Admin{
   //constructor syntax 2
   function Admin(name) {
       this.name=name;
   }   

  sayadmin(){
    console.log();  
  }
    
}*/



/*



let obj1 = new User("John");
obj1.sayHiUser();

let obj2 = new User("Akash");
obj2.sayHiUser();

//.......obj3,obj4......

obj2.sayHi();*/