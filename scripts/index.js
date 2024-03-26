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