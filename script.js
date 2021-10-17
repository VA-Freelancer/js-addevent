// Использования DOM-объекта


// опции 
const options = {
    "capture": false, //фазаб на которой должен сработать обработчик 
    "once": false, // если true, тогда обработчик будет автоматически удалён после ввыполнения.
    "passive": false, // если true, то указывает б что обработчик никогда не вызовет preventDefault()
}

const button = document.querySelectorAll('.button');
const buttonBox = document.querySelector('.btn-box');
const block = document.querySelector('.block');
const blockInner = document.querySelector('.block-inner');
const blockInnerInner = document.querySelector('.block-inner-inner');


// button.onclick = function(){
//     console.log('Клик!');
// }

function showConsole(event) {
    // тип события
    // console.log(event.type);
    console.log("Ура!");
    console.log("Нажата основная клавиша мыши");
    // объект на котором сраьотал обработчик
    // console.log(event.target);
    // Объект которому назначен обработчик
    // console.log(event.currentTarget);
    // положения курсора по оси X
    // console.log(event.clientX);
    // Положения курсора по оси Y
    // console.log(event.clientY);
    // Все детали события
    // console.log(event);

}
// button.forEach(buttonItem =>{
//     buttonItem.addEventListener('click', showConsole, options)
// });
// делегирование событие
buttonBox.addEventListener('click', (event)=>{
    if(event.target.closest(".button")){
        showConsole(event)

    }
}, options)
buttonBox.addEventListener('mousedown', (event)=>{
    if(event.target.closest(".button")){
        console.log(`Нажата кнопка ${event.which}`);

    }
}, options)
buttonBox.addEventListener('contextmenu', (event)=>{
    if(event.target.closest(".button")){
    
        console.log("Вызвано контекстное меню (не основная клавиша мыши)");

    }
}, options)

// block.addEventListener("click", function(event){
//     console.log("Клик на Блок");
//     // event.stopPropagation();

// });
// blockInner.addEventListener("click", function(event){
//     console.log("Клик на Блок второго уровня!");
//     // event.stopPropagation();

// }, options);
// blockInnerInner.addEventListener("click", function(event){
//     console.log("Клик на Блок третьего уровня!");
//     // event.stopPropagation();
// });

const menuBody = document.querySelector('.menu');
document.addEventListener("click", menu);
function menu(event){
    if(event.target.closest('.menu__button')){
        menuBody.classList.toggle('_active');
    }
    if(!event.target.closest('.menu')){
        menuBody.classList.remove('_active');

    }
}
document.addEventListener("keyup", function(event){
    console.log(event.code);
    if(event.code === 'Escape'){
        menuBody.classList.remove('_active');
    }
});






const blockForMouse = document.querySelector('.block-for-mouse');
const blockForMouseTwo = document.querySelector('.block-for-mouse-2');
const blockForMouseThree = document.querySelector('.block-for-mouse-3');
const blockForMouseFour = document.querySelector('.block-for-mouse-4');
const blockForMouseFive = document.querySelector('.block-for-mouse-5');
const bodyForMouse = document.querySelector('body');


blockForMouse.addEventListener('mousemove', function(event) {
    blockForMouse.innerHTML = 
        `clientX - ${event.clientX} <br> clientY - ${event.clientY}`;
});
blockForMouseTwo.addEventListener('mouseover', function(event) {
    blockForMouseTwo.innerHTML = `Курсор над элементом`;
});
blockForMouseTwo.addEventListener('mouseout', function(event) {
    blockForMouseTwo.innerHTML =  `Курсор уходит с элемента`;
});
blockForMouseThree.addEventListener('mouseover', function(event) {
    console.log(event.target);
    console.log(event.relatedTarget);
});
blockForMouseThree.addEventListener('mouseout', function(event) {
    console.log(event.target);
    console.log(event.relatedTarget);
});
blockForMouseFour.addEventListener('mouseenter', function(event) {
   console.log("Курсор над элементом");

});
blockForMouseFour.addEventListener('mouseleave', function(event) {
   console.log("Курсор уходит с элемента");

});
bodyForMouse.addEventListener('mouseenter', function(event) {
    console.log("Курсор над страницей");


});
bodyForMouse.addEventListener('mouseleave', function(event) {
    console.log("Курсор уходит с страницы");
    // alert("не уходите!")
});
blockForMouseFive

blockForMouseFive.addEventListener('mouseover', function(event) {
   let target = event.target.closest('span');
   if(!target) return;
   target.style.cssText = `background-color: #77608d;`;
});
blockForMouseFive.addEventListener('mouseout', function(event) {
    let target = event.target.closest('span');
    if(!target) return;
    target.style.cssText = ``;
});

const txtItem = document.querySelector(".textarea__item");
const txtItemLimit = txtItem.getAttribute('maxlength');
const txtCounter = document.querySelector('.textarea__counter span');
txtCounter.innerHTML = txtItemLimit;

txtItem.addEventListener("keyup", txtSetCounter);
txtItem.addEventListener("keydown", function(event){
    if(event.repeat) txtSetCounter();
});



function txtSetCounter(){
    const txtCounterResult = txtItemLimit - txtItem.value.length;
    txtCounter.innerHTML = txtCounterResult;
}

window.addEventListener('scroll', function(event){

    console.log(`${scrollY}px`);
})



document.addEventListener('DOMContentLoaded', rearyDom);
window.addEventListener('load', readyLoad);
window.addEventListener('beforeunload', beforeunload);
window.addEventListener('unload', function(e){

});

function beforeunload(event){
    event.preventDefault();

    event.returnValue = '';
}

function rearyDom(){
    const image = document.querySelector('.image');
    console.log(document.readyState);
    console.log('DOM загружен!');
    console.log(image.offsetWidth);
}
function readyLoad(){
    console.log(document.readyState);
    const image = document.querySelector('.image');
    console.log('Страница загружен!');
    console.log(image.offsetWidth);
}