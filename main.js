//Slides
const slides = document.querySelectorAll('.card1');

//Navegation buttons
const tanyaBtn = document.getElementById('tanya-btn');
const johnBtn = document.getElementById('john-btn');

const buttons = [tanyaBtn, johnBtn];

let currentSlide = 0;

//Function to show the slide based on index
function showSlide(index) 
{ 
    if(index < 0 || index >= slides.length) return; 
    slides.forEach(slide => {slide.style.display = 'none';
});

//Remove active class from all buttons
buttons.forEach(btn => {
    btn.classList.remove("active");
});

slides[index].style.display = "flex";

buttons[index].classList.add("active");

currentIndex = index;
}

//Event listeners for buttons
tanyaBtn.addEventListener("click", () => {
    showSlide(0);
});

johnBtn.addEventListener("click", () => {
    showSlide(1);
});

showSlide(0);

