var adviceText = document.querySelector('#quote')
var adviceNumber = document.querySelector('#quoteNumber')
var btngenerateAdvice = document.querySelector('.roundcontainer')


function getData(){
    
    fetch('https://api.adviceslip.com/advice')
    .then((respnse) => respnse.json())
    .then((data) =>{
        adviceNumber.innerHTML = 'ADVICE #'+data.slip.id;
        adviceText.innerHTML = data.slip.advice;
        console.log(data);
    } );
}

window.addEventListener('load',getData)

btngenerateAdvice.addEventListener('click', ()=>{
    getData();
});


