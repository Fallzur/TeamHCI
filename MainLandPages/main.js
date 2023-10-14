function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  }else{
    document.getElementById('menu').style.borderRadius = '10px';
  }
}

window.addEventListener('scroll', function() {
  const menu = document.getElementById('menu');
  const isScrolled = window.scrollY > menu.offsetTop;

  if (isScrolled) {
      menu.classList.add('scrolled');
  } else {
      menu.classList.remove('scrolled');
  }
});
