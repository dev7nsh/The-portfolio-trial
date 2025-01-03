gsap.set(".cursor", { force3D: true });
document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  gsap.to(".cursor", {
    x: x - 16,
    y: y - 16,
    ease: "power3"
  });
});

document.body.addEventListener("mouseleave", () => {
  gsap.to(".cursor", {
    scale: 0,
    duration: 0.1,
    ease: "none"
  });
});

document.body.addEventListener("mouseenter", () => {
  gsap.to(".cursor", {
    scale: 1,
    duration: 0.1,
    ease: "none"
  });
});

let hoverCursors1 = document.querySelectorAll('[data-cursor="hover-1"]');
let hoverCursors2 = document.querySelectorAll('[data-cursor="hover-2"]');

hoverCursors1.forEach(function (cursor) {
  cursor.addEventListener("mouseenter", () => {
    gsap.to(".cursor", {
      scale: 2.5
    });
  });

  cursor.addEventListener("mouseleave", () => {
    gsap.to(".cursor", {
      scale: 1
    });
  });
});
hoverCursors2.forEach(function (cursor) {
  cursor.addEventListener("mouseenter", () => {
    gsap.to(".cursor", {
      scale: 4
    });
  });
  cursor.addEventListener("mouseleave", () => {
    gsap.to(".cursor", {
      scale: 1
    });
  });
});

