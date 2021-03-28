const hamburgerButton = document.getElementById('hamburger');
const navList=document.getElementById('navList');
function togglebutton() {
navList.classList.toggle('show')
}
hamburgerButton.addEventListener('click',togglebutton)