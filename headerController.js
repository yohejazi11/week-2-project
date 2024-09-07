window.addEventListener('scroll', function() {
    var mainNav = document.getElementById('mainNav');
    var logoImg=document.getElementById('logoImg');
    var burgerMenu=document.getElementById('burgerMenu');
    var burgerPeices=document.querySelectorAll('.burger-peices');

    if (window.scrollY > 5) {
        mainNav.classList.add("second-status-nav");
        logoImg.setAttribute('src','icons/logo-h.png');
        burgerMenu.classList.add('burger-menu-h');
        burgerPeices.forEach(function(burgerPeice) {
            burgerPeice.classList.add('burger-peices-h');
        });
    } else {
        mainNav.classList.remove("second-status-nav");
        logoImg.setAttribute('src','icons/logo-h-white.png');
        burgerMenu.classList.remove('burger-menu-h');
        burgerPeices.forEach(function(burgerPeice) {
            burgerPeice.classList.remove('burger-peices-h');
        });
    }
});


