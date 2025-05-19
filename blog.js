// Aquí podés agregar funcionalidades dinámicas más adelante

console.log('Blog cargado correctamente.');
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

document.addEventListener("DOMContentLoaded", function () {
    const blogArticles = document.querySelectorAll(".blog-article");

    blogArticles.forEach((article, index) => {
        const likeBtn = article.querySelector(".like-btn");
        const dislikeBtn = article.querySelector(".dislike-btn");
        const likeCount = article.querySelector(".like-count");
        const dislikeCount = article.querySelector(".dislike-count");

        const articleKey = `article-${index}`;

        // Cargar estado guardado
        const savedLikes = parseInt(localStorage.getItem(`${articleKey}-likes`)) || 0;
        const savedDislikes = parseInt(localStorage.getItem(`${articleKey}-dislikes`)) || 0;
        const userAction = localStorage.getItem(`${articleKey}-action`); // "like" o "dislike"

        likeCount.textContent = savedLikes;
        dislikeCount.textContent = savedDislikes;

        if (userAction === "like") {
            likeBtn.disabled = true;
            dislikeBtn.disabled = true;
        } else if (userAction === "dislike") {
            likeBtn.disabled = true;
            dislikeBtn.disabled = true;
        }

        likeBtn.addEventListener("click", () => {
            if (!userAction) {
                const newCount = savedLikes + 1;
                likeCount.textContent = newCount;
                localStorage.setItem(`${articleKey}-likes`, newCount);
                localStorage.setItem(`${articleKey}-action`, "like");
                likeBtn.disabled = true;
                dislikeBtn.disabled = true;
            }
        });

        dislikeBtn.addEventListener("click", () => {
            if (!userAction) {
                const newCount = savedDislikes + 1;
                dislikeCount.textContent = newCount;
                localStorage.setItem(`${articleKey}-dislikes`, newCount);
                localStorage.setItem(`${articleKey}-action`, "dislike");
                likeBtn.disabled = true;
                dislikeBtn.disabled = true;
            }
        });
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