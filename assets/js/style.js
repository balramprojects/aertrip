// Menu Active Link Highlighting
const navLinks = document.querySelectorAll(
    'header nav a, header .header-right a'
);

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});


// Header Scroll Effect
const header = document.querySelector('header');
let ticking = false;

function onScroll() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            header.classList.toggle('scrolled', window.scrollY > 10);
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', onScroll);


// Parallex Scrolling for Landing Banner
(function () {
    const banner = document.getElementById('landing-banner');
    const bg = banner.querySelector('.banner-bg');
    const creative = banner.querySelector('.banner-creative');
    const content = banner.querySelector('.banner-content');

    function parallax() {
        const scrollY = window.scrollY;
        const bannerHeight = banner.offsetHeight;

        if (scrollY <= bannerHeight) {

            bg.style.transform = `translateY(${scrollY * 0.3}px)`;
            creative.style.transform = `translate3d(0%, ${scrollY * 0.45}px, 0)`;

            const maxTextMove = bannerHeight / 4;
            const textMove = Math.min(scrollY * 0.2, maxTextMove);

            content.style.transform = `translateY(${textMove}px)`;
        }

        requestAnimationFrame(parallax);
    }

    requestAnimationFrame(parallax);
})();


// Tabination for Latest Updates Section
const tabs = document.querySelectorAll('#latest-updates .tab');
const contents = document.querySelectorAll('#latest-updates .content-creative');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetId = tab.dataset.tab;

        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(targetId).classList.add('active');
    });
});


// Carousel Slide Show for Smart Search Section
const slides = document.querySelectorAll('#smart-search .slide');
const dots = document.querySelectorAll('#smart-search .dot');

let currentIndex = 0;
let autoSlideInterval = null;
const SLIDE_DELAY = 4000;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');

    currentIndex = index;
}

function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
    }, SLIDE_DELAY);
}

function stopAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    }
}

dots.forEach((dot, index) => {

    dot.addEventListener('mouseenter', stopAutoSlide);

    dot.addEventListener('mouseleave', () => {
        startAutoSlide();
    });

    dot.addEventListener('click', () => {
        stopAutoSlide();
        showSlide(index);
    });
});

showSlide(0);
startAutoSlide();

const smartContent = document.querySelector('#smart-search .smart-content');

smartContent.addEventListener('mouseenter', stopAutoSlide);
smartContent.addEventListener('mouseleave', startAutoSlide);


// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');
const mobileLinks = document.querySelectorAll('.mobile-nav a');

function openMenu() {
    mobileMenu.classList.add('open');
    // document.body.classList.add('no-scroll');
    document.body.style.overflow = 'hidden';
}

function closeMenuFunc() {
    mobileMenu.classList.remove('open');
    // document.body.classList.remove('no-scroll');
    document.body.style.overflow = 'scroll';
}

hamburger.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMenuFunc);

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMenuFunc();
    });
});

// window.addEventListener('pageshow', () => {
//     document.body.classList.remove('no-scroll');
// });




