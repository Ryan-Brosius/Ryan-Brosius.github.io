function toggleMenu() {
    var menu = document.getElementById('burger');
    var mobile_nav = document.querySelector('.mobile-nav')
    menu.classList.toggle('show');
    mobile_nav.classList.toggle('show');
}

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('#header');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

$(function(){
    $('#header').load("includes/header.html", function() {
        var tabs = document.querySelectorAll('.nav-focus');
        var mobile_tabs = document.querySelectorAll('.nav-focus-mobile');

        tabs.forEach(function(tab) {
            console.log(tab.getAttribute('href'));
            if (window.location.href.includes(tab.getAttribute('href'))) {
                tab.classList.add('menu-active');
            }
        });

        mobile_tabs.forEach(function(tab) {
            if (window.location.href.includes(tab.getAttribute('href'))) {
                tab.classList.add('mobile-nav-active');
            }
        });
    });
});
