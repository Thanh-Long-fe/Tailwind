const menu = document.querySelector('#top-menu');
const btn = document.querySelector('#hide-btn');

document.addEventListener('click', (e) =>{
if (btn.contains(e.target)) {
    menu.classList.toggle('hidden');
    menu.classList.toggle('top-menu-epx');
}
else{
   if ( menu.classList.contains('top-menu-epx')){
    menu.classList.remove('top-menu-epx');
    menu.classList.add('hidden');
   }

    
  
}
});