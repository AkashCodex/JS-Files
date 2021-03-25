let a=[1,2,3,4,5];

console.log("Array before operations");
for(let i=0;i<a.length;i++){
 console.log(a[i]+" ");
}
console.log("Array after operations");
console.log("after 1 pop");
a.pop();

for(let i=0;i<a.length;i++){
    console.log(a[i]+" ");
}
a.pop();
console.log("after 2 pop");

for(let i=0;i<a.length;i++){
    console.log(a[i]+" ");
}
a.push(23);

console.log("After push 23");
for(let i=0;i<a.length;i++){
    console.log(a[i]+" ");
}