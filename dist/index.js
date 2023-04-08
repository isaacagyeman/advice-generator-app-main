var adviceText = document.querySelector('#quote')
var adviceNumber = document.querySelector('#quoteNumber')
var btngenerateAdvice = document.querySelector('.roundcontainer')

fetch('https://api.adviceslip.com/advice')
.then((response) => response().json())
.then((data) => displayData(data));

function displayData(data){
    // const {slip} = data;
    const {id} = data['id'];
    const {advice} = data['advice'];

    adviceNumber.innerHTML = id;
    adviceText.innerHTML = advice;
}

btngenerateAdvice.addEventListener('click', ()=>{
displayData(data)
});