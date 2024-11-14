let container = document.getElementById('container');
container.addEventListener('click',(e)=>{
    // console.log(e);
    let res = 0;
    let lastPreviousValue =0;
    let secondLastPreviousValue=0;
    if(e.target.tagName == 'BUTTON'){
        // let value = e.target.textContent;
        let value = parseInt("e.target.textContent");
        console.log(value);
    }
})