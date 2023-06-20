const countValue= document.querySelector('#counter');

const Increment= ()=>{
    //getting the value from UI
    let value=parseInt(countValue.innerText);
    //Update the value 
    value=value+1;
    //set the new value to the original document
    countValue.innerText= value;


};


const Decrement=()=>{
    let value=parseInt(countValue.innerText);
    value=value-1;
    countValue.innerText=value;
}
