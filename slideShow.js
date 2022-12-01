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

// moves slides after button click
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  let slideShow = document.getElementById("slideShow");

  
  let i;
  if (n > slides.length) {slideIndex = 1}

  
  if (n < 1) {slideIndex = slides.length}
  
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  if(slideIndex == slides.length){
    slideShow.append(slides[slideIndex-1], slides[slideIndex-slides.length]);
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-slides.length].style.display = "block";
  }else if(slideIndex != slides.length){
    slideShow.append(slides[slideIndex-1], slides[slideIndex]);
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex].style.display = "block";
  }
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}