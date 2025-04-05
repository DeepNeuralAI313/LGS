
// About Section Animation
const aboutSection = document.querySelector('.about');

window.addEventListener('scroll', () => {
    const sectionPos = aboutSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if(sectionPos < screenPos) {
        aboutSection.classList.add('visible');
    }
});

// Create seamless carousel effect by duplicating images
const carousel = document.querySelector('.carousel');
const images = carousel.children;
const totalImages = images.length;

// Clone images for seamless loop
for(let i = 0; i < totalImages; i++) {
    const clone = images[i].cloneNode(true);
    carousel.appendChild(clone);
}

// Adjust animation duration based on number of images
carousel.style.animationDuration = `${totalImages * 3}s`;

// Pause on hover
carousel.addEventListener('mouseenter', () => {
    carousel.style.animationPlayState = 'paused';
});

carousel.addEventListener('mouseleave', () => {
    carousel.style.animationPlayState = 'running';
});

let menu_open_close=true;
function openmenu(){
    menu=document.getElementById('menu')
    mobile_menu=document.getElementById('mobilenavabar')
    // onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))"
    menu.classList.toggle('opened')
    menu.setAttribute('aria-expanded', menu.classList.contains('opened'))
    
    if (menu_open_close==true){
        mobile_menu.style.display = "block";
        menu_open_close=false;
    }
    else{
        mobile_menu.style.display = "none";
        menu_open_close=true;
    }
}
