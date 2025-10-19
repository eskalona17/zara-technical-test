// main.js
import "@/styles/main.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

  gsap.fromTo(".header--content",
    { opacity: 0, y: -50 },
    { opacity: 1, y: 0, duration: 2 }
  );

  gsap.fromTo(
    ".section--intro .content",
    { opacity: 0, filter: "blur(10px)" },
    {
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section--intro",
        start: "top 30%",
        end: "top 10%",
        toggleActions: "play none none reverse",
        markers: false
      }
    }
  );


  gsap.from(".carousel--secondary .carousel-text p", {
    opacity: 0,
    y: 30,
    x: -20,
    scale: 0.95,
    stagger: 0.3,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".carousel--secondary .carousel-text",
      start: "top 80%",
      toggleActions: "play none none reverse",
      markers: false
    }
  });

  gsap.from(".section--editorial .text p", {
    opacity: 0,
    y: 30,
    stagger: 0.3,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".section--editorial .text",
      start: "top 80%",
      toggleActions: "play none none reverse",
      markers: false
    }
  });

  gsap.from(".section--closing .text p", {
  opacity: 0,       
  x: -50,          
  duration: 1,
  ease: "power2.out",
  stagger: 0.3,    
  scrollTrigger: {
    trigger: ".section--closing .text",
    start: "top 80%",  
    toggleActions: "play none none reverse",
    markers: false
  }
});

  gsap.utils.toArray(
    ".section--story .media-text"
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


gsap.from(".section--shop .shop-grid img", {
  opacity: 0,
  y: 20,           
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.1,    
  scrollTrigger: {
    trigger: ".section--shop .shop-grid",
    start: "top 60%",   
    toggleActions: "play none none reverse",
    markers: false
  }
});