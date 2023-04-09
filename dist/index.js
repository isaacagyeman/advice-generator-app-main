var adviceText = document.querySelector('#quote')
var adviceNumber = document.querySelector('#quoteNumber')
var btngenerateAdvice = document.querySelector('.roundcontainer')


btngenerateAdvice.addEventListener('click', ()=>{
    fetch('https://api.adviceslip.com/advice')
    .then((respnse) => respnse.json())
    .then((data) =>{
        adviceNumber.innerHTML = 'ADVICE #'+data.slip.id;
        adviceText.innerHTML = data.slip.advice;
        console.log(data);
    } );
});


