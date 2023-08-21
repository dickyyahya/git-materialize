const sideNav = document.querySelectorAll(".sidenav");
M.Sidenav.init(sideNav);

const slider = document.querySelectorAll(".slider");
M.Slider.init(slider, { indicators: false, interval: 3000, height: 500 });

const parallax = document.querySelectorAll(".parallax");
M.Parallax.init(parallax);

const materialboxed = document.querySelectorAll(".materialboxed");
M.Materialbox.init(materialboxed);

const scroll = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(scroll, {
  scrollOffset: 50,
});
