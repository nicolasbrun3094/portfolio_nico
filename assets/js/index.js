const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true },
  smoothMobile: 1,
  multiplier: 1.0,
});

// Wait 2 seconds then calculate the new page height
setTimeout(() => {
  scroll.update();
}, 2000);

// Body color
scroll.on("scroll", () => {
  if (document.querySelector("#color.is-inview")) {
    document.body.style.background = "#000101";
    document.body.style.color = "#fefeff";
  } else {
    document.body.style.background = "#fefeff";
    document.body.style.color = "#000101";
  }
});

// VanillaTilt

VanillaTilt.init(document.querySelectorAll(".about-card"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 1,
});
