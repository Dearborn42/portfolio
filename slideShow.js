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
  let text = document.getElementsByClassName("text");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  let w = window.innerWidth;

  let i;
  if (n > slides.length) { slideIndex = 1 }


  if (n < 1) { slideIndex = slides.length }


  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < text.length; i++) {
    text[i].style.display = "none";
  }


  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  captionText.innerHTML = slides[slideIndex - 1].id;

  if (w >= 701 || w <= 404) {
    if (slideIndex != slides.length) {
      slides[slideIndex].style.display = "block";
      captionText.innerHTML = slides[slideIndex - 1].id + " and " + slides[slideIndex].id;
    } else {
      slides[0].style.display = "block";
      captionText.innerHTML = slides[0].id + " and " + slides[slideIndex - 1].id;
    }
  }

}


  function desc(index){
   let slides = document.getElementsByClassName("mySlides");
   let img =  slides[index].getElementsByClassName("img");
   let text = document.getElementsByClassName("text");
   text = text[index].style;
   img[0].style.opacity = ".2";
   img[0].style.transition = ".5s ease";
   text.display = "block";
  }

  function remove(index){
   let slides = document.getElementsByClassName("mySlides");
   let text = document.getElementsByClassName("text");
   let img =  slides[index].getElementsByClassName("img");
   img[0].style.opacity = "1"
   text[index].style.display = "none";
  }