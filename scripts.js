document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('.menu-items');
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    menuToggle.addEventListener('click', function () {
        menuItems.classList.toggle('menu-active');
    });

    themeToggle.addEventListener('click', function () {
        body.classList.toggle('light-mode');
        const isLightMode = body.classList.contains('light-mode');
        themeToggle.textContent = isLightMode ? '🌙' : '🌞';
    });

    const carouselImages = document.querySelector('.carousel-images');
    let index = 0;

    function nextSlide() {
        index = (index + 1) % carouselImages.children.length;
        carouselImages.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(nextSlide, 3000);
});
