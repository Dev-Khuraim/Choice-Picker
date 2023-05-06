

let tags = document.querySelector('.tags');
let textarea = document.querySelector('textarea');
let span = document.createElement('span');
let count = 0;
let interval = 0;
textarea.addEventListener('focus',()=>{
if(textarea.value == ""){
    tags.innerHTML = "";
    span.innerHTML = "";
    span.style.backgroundColor = 'white';
    span.style.color = 'black';

}
})
textarea.addEventListener('click',()=>{
if(textarea.value == ""){
    tags.innerHTML = "";
    span.innerHTML = "";
    span.style.backgroundColor = 'white';
    span.style.color = 'black';

}
})


textarea.addEventListener('keyup',(e)=>{
    console.log(e.key);
    if(e.key == 'Backspace'){
        modifyingChoice();
    }
    else if(e.key == 'Enter'){
       
        textarea.value= "";
        textarea.focus = false
       interval =  setInterval(picker,500);
        
    }
    else if(e.key == ','){
        span = document.createElement('span');

    }
    else if(e.key.length == 1){

        tags.appendChild(span);
        console.log(span.innerText)
        span.innerText = span.innerText+e.key;
    }
   
})
function modifyingChoice(){
    let choices = textarea.value.split(',');
    let n = tags.querySelectorAll('span');
    if(choices.length == n.length){
        n[n.length-1].innerText = choices[choices.length-1];
        if(choices[choices.length-1]==""){
            tags.removeChild(n[n.length-1])
        }
    }
   
    else if(n.length>choices.length){
        console.log(choices[choices.length-1]);
        tags.removeChild(n[n.length-1])
    }
    else{
       
        span = document.createElement('span');
        tags.appendChild(span);
        span.innerText = choices[choices.length-1];
    }
}
const picker = ()=>{
    let n = tags.querySelectorAll('span').length;
    pickRandomly(n);
}
function pickRandomly(n){
    span.style.backgroundColor = 'white';
    span.style.color = 'black';
    
    count++;
    if(count == n){
        count = 0;
      
clearInterval(interval);

    }
    let index = Math.floor(Math.random() * n) + 1;
    console.log(index)
    span = tags.querySelector(`:nth-child(${index})`);
    span.style.backgroundColor = 'black';
    span.style.color = 'white';
   
    span.style.scale = 0.5;
}