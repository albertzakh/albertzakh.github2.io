const moon = document.getElementById('moon');

var images = ["img/sun.png", 'img/moon.png'];

moon.onclick = function() {
    document.body.classList.toggle('dark-theme');
    moon.src = images.reverse()[1];
}