function sayhello(){
    console.log("This function says hello after 2 seconds");
}


setTimeout(sayhello,2000);

let count=0;
let id=setInterval(() => {
 console.log("Hello after 2 seconds");
 count++;
 if(count>6){
  clearInterval(id);   
 }   
}, 2000);

setInterval(() => {
    console.log("Infinite loops LOL");
}, 1000);