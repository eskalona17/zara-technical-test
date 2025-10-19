// main.js
import "@/styles/main.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ✅ Registrar el plugin
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  console.log("App cargada");

  // Animación inicial (header)
  gsap.fromTo(".container-header",
    { opacity: 0, y: -50 },
    { opacity: 1, y: 0, duration: 2 }
  );

  gsap.fromTo(".site-header .container-img p",
    { opacity: 0, filter: "blur(10px)" },
    { opacity: 1, filter: "blur(0px)", duration: 1.8, ease: "power2.out" }
  );

  gsap.utils.toArray(
    ".third-section .container-image figure, .third-section .container-image .container-image-text"
  ).forEach((el) => {
    gsap.fromTo(el,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          toggleActions: "play none none reverse",
        }
      }
    );
  });
});
