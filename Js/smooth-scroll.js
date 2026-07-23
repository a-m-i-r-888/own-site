'use strict';

const lenis = new Lenis({
  duration: 2.5,
  smoothWheel: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);