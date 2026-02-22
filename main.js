//Slides
const slides = document.querySelectorAll('.card1');

//Navegation buttons
const tanyaBtn = document.getElementById('tanya-btn');
const johnBtn = document.getElementById('john-btn');

const buttons = [tanyaBtn, johnBtn];
//Current slide
let currentSlide = 0;

//Function to show the current slide
function showSlide(index) 
{ 
    if(index < 0 || index >= slides.length) return; 
    slides.forEach(slide => slide.style.display = 'none');
});
