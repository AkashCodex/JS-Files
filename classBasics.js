class User{
    say(){
        console.log("Hello");
    }

    add(a,b){
     return a+b;
    }
}



let obj=new User();
obj.say();
let c=obj.add(4,5);
console.log(c);