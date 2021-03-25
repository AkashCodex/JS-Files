class A{

     Hello() {
      console.log("Hello");  
    }
}
class B extends A{
   Hi(){
     console.log("Hi");  
   } 
}

let obj=new B();
obj.Hello();
obj.Hi();
