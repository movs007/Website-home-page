const navSlider = () => {
  const menuTrigger = document.querySelector('.menu-trigger');
  const nav = document.querySelector('.nav-menu-list');


  menuTrigger.addEventListener('click' , () => {
    nav.classList.toggle('.nav-active');
  });
};

navSlider();
