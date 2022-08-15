// hamburger
const hamburger = document.querySelector('#hamburger');
const NavMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    NavMenu.classList.toggle('hidden');
})
//navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}
//klik diluar hamburger
window.addEventListener('click', function(e){
    if(e.target !=hamburger && e.target !=NavMenu){
        hamburger.classList.remove('hamburger-active')
        NavMenu.classList.add('hidden')
    }
})
//dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html')
darkToggle.addEventListener('click', function (){
    if(darkToggle.checked){
        html.classList.add('dark')
        localStorage.theme = 'dark';
    }else {
        html.classList.remove('dark')
        localStorage.theme = 'light';
    }
})
//pindahkan posisi togle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }