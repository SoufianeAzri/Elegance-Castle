window.onscroll = function() {myFunction()};

// Get the header
var header = document.querySelector(".header-area");

// Get the offset position of the navbar
var sticky = header.offsetTop;
console.log(sticky);
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
}
let toggleBtn = document.querySelector(".toggle-menu");
let tlinks = document.querySelector(".links-container .links");
console.log(tlinks);
toggleBtn.onclick = function(e){
    e.stopPropagation();
    tlinks.classList.toggle("open");
}
document.addEventListener("click",(e)=>{
    if(e.target !== toggleBtn && e.target !== tlinks){
        console.log("this is not button");
        if(tlinks.classList.contains("open")){
            tlinks.classList.toggle("open");
        }

    }
})
tlinks.onclick = function(e){
    e.stopPropagation();
}
