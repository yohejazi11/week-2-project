window.addEventListener('scroll', function() {
    var mainNav = document.getElementById('mainNav');
    var logoImg=document.getElementById('logoImg');
    
    if (window.scrollY > 5) {
        mainNav.classList.add("second-status-nav");
        logoImg.setAttribute('src','icons/logo-h.png');
    } else {
        mainNav.classList.remove("second-status-nav");
        logoImg.setAttribute('src','icons/logo-h-white.png');

    }
});


