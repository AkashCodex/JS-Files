//shift and unshift

let a=[1,2,3,4,5];

console.log("Array before operations");
for(let i=0;i<a.length;i++){
 console.log(a[i]+" ");
}

a.shift();  //dequee

for(let i=0;i<a.length;i++){
    console.log(a[i]+" ");
}

a.unshift(89); //enqueu

for(let i=0;i<a.length;i++){
    console.log(a[i]+" ");
}