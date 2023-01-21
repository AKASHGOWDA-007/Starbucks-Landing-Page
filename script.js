function imgSlider(anything) {
    document.querySelector(".Starbucks").src = `../Starbucks Landing Page/images/${anything}`; 
}

function changeCircleColor(color) {
    const circle = document.querySelector(".circle");
    circle.style.background = color;
}