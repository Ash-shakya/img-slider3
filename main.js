const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#nextBtn');
const prev = document.querySelector('#prevBtn');
const auto = true;
const intervalTime = 5000;
let slideInterval;


const nextSlide = () => {
    // get current slide
  const current = document.querySelector('.current');  
//   remove current class
  current.classList.remove('current');
//   check for next slide
    if(current.nextElementSibling){
        // add current to next sibling
        current.nextElementSibling.classList.add('current');
    }else{
        // add current to start
        slides[0].classList.add('current');
    }
// add delay
setTimeout(() => current.classList.remove('current'));
};


const prevSlide = () => {
    // get current slide
  const current = document.querySelector('.current');  
//   remove current class
  current.classList.remove('current');
//   check for previous slide
    if(current.previousElementSibling){
        // add current to next sibling
        current.previousElementSibling.classList.add('current');
    }else{
        // add current to start
        slides[slides.length - 1].classList.add('current');
    }
// add delay
setTimeout(() => current.classList.remove('current'));
};
// button events
next.addEventListener('click', e=> {
    nextSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});
prev.addEventListener('click', e=> {
    prevSlide();
        if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// auto slide
if(auto){
    // run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}