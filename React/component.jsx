import Footer from " ./Components/Footer"
import Navbar from " ./Components/Navbar"
function App(){
    let count=0;
    function handleIncrement(){
        count++;
        console.log(count);
    }
    function handleDcrement(){
        count--;
        console.log(count);
    }
    return(
        <div>
        <button onClick={()=>{handleIncrement}}>Increment</button>
        <h1>{count}</h1>
        <button onClick={()=>{handleIncrement}}>Increment</button>
        </div>
    )
}