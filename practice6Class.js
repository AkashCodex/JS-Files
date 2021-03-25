class G{
    constructor(value){
      this.value=value;
    }

    //getter and setters
    getvalue(){
      return this.value;  
    }

    setvalue(value){
      this.value=value;  
    }
}

let obj1=new G();
obj1.setvalue(20);
let a=obj1.getvalue();
console.log("The value is "+a);
