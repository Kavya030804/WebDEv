// console.log("hello");


// function waitAsec(){
//     let curr_time =new Date().getTime();
//     let next_sec = curr_time+4000;

//     while(new Date().getTime() < next_sec);
// }

// function waitNsec(n){
//     for(let i=0 ; i<n;i++){
//         waitAsec();
//         console.log(i);
//     }
// }

// waitNsec();

console.log("hello");
setTimeout(()=>{
    console.log("inside setTimeout function")
},3000);
console.log("world");


let id =setInterval(()=>{
    console.log("inside setInterval")
},1000);

setTimeout(()=>{
    clearInterval(id)
},8000)
console.log("world");


