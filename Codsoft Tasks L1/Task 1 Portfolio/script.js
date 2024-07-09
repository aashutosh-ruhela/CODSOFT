window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const scrollTop = document.querySelector('.scroll-top');

    header.classList.toggle('sticky', window.scrollY > 0);
    scrollTop.classList.toggle('block', window.scrollY > 0);
});

const scrollTop = document.querySelector('.scroll-top');
scrollTop.addEventListener('click', function () {
    window.scrollTo(0, 0);
});

const toggleNav = document.querySelector(".menu");
const navItem = document.querySelector(".nav-list");
const navLink = document.querySelectorAll('.nav-link');

toggleNav.addEventListener('click', function () {
    navItem.classList.toggle("block");
});

navLink.forEach(link => {
    link.addEventListener('click', function () {
        navItem.classList.remove('block');
    });
});


const contactBtn = document.querySelector('.contact-btn');
const contactSection = document.querySelector('#contact');

contactBtn.addEventListener('click', function () {
    window.scrollTo(contactSection.getBoundingClientRect());
});


// const sr = ScrollReveal({
//     distance: '80px',
//     duration: 2000,
//     reset: true
// })

// sr.reveal('.myself', {origin:'top', delay:100})
// sr.reveal('.socialLinks', {origin:'left', delay:150})
// sr.reveal('.myImage', {origin:'top', delay:150})

// sr.reveal('.heading', {origin:'top'})
// sr.reveal('#about h4', {origin:'top', delay:100})
// sr.reveal('.aboutImage', {origin:'left', delay:150})
// sr.reveal('.aboutMeText', {origin:'right', delay:150})

// sr.reveal('#skills h1', {origin:'top', delay:50})
// sr.reveal('#skills .bar', {origin:'top', delay:100})

// sr.reveal('#contact h1', {origin:'top', delay:100})
// sr.reveal('.contact-details', {origin:'left', delay:150})
// sr.reveal('.form', {origin:'right', delay:150})