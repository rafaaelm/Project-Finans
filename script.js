

function initAnimacaoScroll() {
  

const sections = document.querySelectorAll('.js-scroll');
const metade = window.innerHeight * 0.6;
if (sections.length) { 
  function animeScroll(){ 
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top - metade;
    if(sectionTop < 0){
      section.classList.add('animate');
    }else{
      section.classList.remove('animate');
    }
  }); 
}
}
animeScroll();
window.addEventListener('scroll', animeScroll);
}

initAnimacaoScroll();




