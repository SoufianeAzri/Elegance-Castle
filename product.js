// let imgSlide = document.querySelector('.product-image .images');
// let imgLength = document.querySelectorAll('.product-image li');
// let imgWidth = document.querySelector('.product-image li');
// console.log(imgLength.length);
// console.log(imgSlide);
// const style = getComputedStyle(imgWidth);
// let styleWidth = style.width;
// function returnStyle(){
//     styleWidth = style.width;
//     console.log(styleWidth)
//     return styleWidth;

// }
// console.log(styleWidth);
// slide = 0;
// returnStyle();
// slideNext(slide);
// function next(){
//     slideNext(slide +=parseFloat(styleWidth));
//     console.log(parseInt(styleWidth));
//     returnStyle();
// }
// function prev(){
//     slideNext(slide -= parseFloat(styleWidth));
//     returnStyle();
// }
// console.log( -(imgLength.length) * parseInt(styleWidth))
// function slideNext(n){
//     if(n <= 0){
//         if(n<=-((imgLength.length -1) * parseFloat(styleWidth))){
//             return false;
//         }else{
//             imgSlide.style.cssText = `transform: translate3d(${n}px,0,0);`;
//         }
//     }else{
//         imgSlide.style.cssText = `transform: translate3d(0px,0,0);`;
//     }
// }
let sizes = document.querySelectorAll('.size li');
let alinks = document.querySelectorAll(".size li a");
console.log(alinks)
sizes.forEach((li)=>{
    li.addEventListener('click',(e)=>{
        console.log(e.target);
        e.target.parentElement.querySelectorAll(".active-size").forEach((ele)=>{
            ele.classList.remove("active-size");
        });
        e.target.classList.add("active-size");
    })
})
alinks.onclick = function(e){
    e.stopPropagation();
}
let color = document.querySelectorAll('.color li');
color.forEach((li)=>{
    li.addEventListener('click',(e)=>{
        console.log(e.target);
        e.target.parentElement.querySelectorAll(".active-color").forEach((ele)=>{
            ele.classList.remove("active-color");
        });
        e.target.classList.add("active-color");
    })
})
var responsiveSlider = function() {

    var slider = document.getElementById("slider");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slideWrap");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    
    window.addEventListener('resize', function() {
      sliderWidth = slider.offsetWidth;
    });
    
    var prevSlide = function() {
      if(count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = 1) {
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
    };
    
    var nextSlide = function() {
      if(count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = items) {
        slideList.style.left = "0px";
        count = 1;
      }
    };
    
    next.addEventListener("click", function() {
      nextSlide();
    });
    
    prev.addEventListener("click", function() {
      prevSlide();
    });
    
    setInterval(function() {
      nextSlide()
    }, 5000);
    
    };
    
    window.onload = function() {
    responsiveSlider();  
    }
    
