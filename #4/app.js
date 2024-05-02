const nav = document.querySelector('nav');
const programsCard = document.querySelectorAll('.programs-card');
function handleNavBar(){
  if(window.scrollY > 200){
    nav.style.position = 'fixed'
  }
  else{
    nav.style.position = 'absolute'
  }
}
window.addEventListener('scroll',  handleNavBar);


const linksButtons = document.querySelector('.links-buttons'); 

function showMenu() {
  linksButtons.style.left = 0
}

function hideMenu() {
  linksButtons.style.left = '-100%'
}