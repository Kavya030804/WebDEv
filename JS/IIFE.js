(()=>{
    console.log("Inside IIFE Function")
})();

// ((name)=>{
//     console.log("my name is name")
// })("kavya");

// ((a,b)=>{
//     console.log('the sum of a & b is ${a +b}');
// })(10,15);

(function iife(){
    let marks=75;
    let totalmarks=90;
    function student(){
        details();
    }

    function details(){
        console.log('percentage : ${(marks/totalmarks)*100}')
    }
    return student
})();

student();