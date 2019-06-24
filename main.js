
    function openNav() {
        document.getElementById("myNav").style.width = "50%";
      }
      function closeNav() {
        document.getElementById("myNav").style.width = "0%";
      }

    function ourFunction(){
      let moses = document.querySelector('.div'); 
      if(moses.style.width === '300px'){
        moses.style.width = '0px';
      } else{
        moses.style.width = '300px'
      }
    }

    const btns = document.querySelectorAll('.btn');
    const screen = document.querySelector('.screen');
    for (let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function (){
    let number = btns[i].getAttribute('data-num');
    screen.value = number;
    })
    }

    const clearBtn = document.querySelector('.clear')
    function myFunction(){
      screen.value = '';
    }


let slideStatus = 0;

function showSlides() {
  var moses= document.getElementsByClassName("mySlides");
  for (i = 0; i < moses.length; i++) {
    moses[i].style.display = "none"; 
  }
 
  slideStatus++;
  if (slideStatus > moses.length) {slideStatus= 1} 
  moses[slideStatus-1].style.display = "block"; 
  setTimeout(showSlides, 4000); 
}
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
showSlides();