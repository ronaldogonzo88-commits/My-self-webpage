let slides = document.querySelectorAll(".islideshow img");
let i = 0;

setInterval(() => {
    slides[i].style.display = "none";
    i = (i + 1) % slides.length;
    slides[i].style.display = "block";
},2000);