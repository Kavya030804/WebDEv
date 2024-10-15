const mySym = Symbol("key1");

const jsUser ={
    name : "kavya" , 
    [mySym] :"mykey1" ,
    age :20 , 
    email : "kavya@gmail.com"
}
console.log(jsUser[mySym]);
console.log(jsUser);
console.log(Object.keys(jsUser));
console.log(Object.values(jsUser));
console.log(Object.entries(jsUser));

let person = {
    name:"kavya",
    age:20 , 
    salary : 50000 ,
    education : B.Tech
}
console.log(person);

