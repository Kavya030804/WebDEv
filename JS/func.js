function func1(d){
    let  a=10;
    let b=20;

    (e)=>{
        let c=40;
        (f)=>{
            return a+b+c+d+e+f;
        }
        return func3;
    }
    return func2;
}
console.log(func1(50)(60)(70));

// let returnValue=func1();
// console.log(returnValue());