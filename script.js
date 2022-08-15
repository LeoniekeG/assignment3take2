const buttonBar = document.getElementsByClassName('bar');

const colorList = document.getElementsById('#pannenkoek');

buttonBar[0].addEventListener("click", function(){
    colorList.style.visibility='hidden';
}); 

const getPink = document.getElementById('pink');

const basicBackground = document.getElementsByClassName('basic-background')

getPink.addEventListener("click", function(){
    basicBackground.classList.toggle('pink-background');
}); 