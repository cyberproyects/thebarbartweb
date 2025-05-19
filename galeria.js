// AOS animación
if (typeof AOS !== "undefined") {
  AOS.init();
}

// Preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.transition = 'opacity 0.5s ease';
    preloader.style.opacity = '0';
    setTimeout(() => preloader.style.display = 'none', 500);
  }
});


window.addEventListener('load', () => {
  if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#f72585" },
        shape: { type: "circle" },
        opacity: {
          value: 0.5, random: true,
          anim: { enable: true, speed: 1, opacity_min: 0.1 }
        },
        size: {
          value: 3, random: true,
          anim: { enable: true, speed: 4, size_min: 0.1 }
        },
        line_linked: { enable: false },
        move: {
          enable: true, speed: 1, direction: "none",
          random: true, straight: false, out_mode: "out"
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: false }, onclick: { enable: false } }
      },
      retina_detect: true
    });
    console.log("Partículas activadas en esta página");
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.galeria-img');
  const directions = ['from-left', 'from-right', 'from-top', 'from-bottom'];

  images.forEach((img, index) => {
    const randomDir = directions[Math.floor(Math.random() * directions.length)];
    img.classList.add(randomDir);

    setTimeout(() => {
      img.classList.add('animate');
      img.classList.remove(randomDir);
    }, 100 * index); // desfasado para dar efecto de entrada progresiva
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }
});


