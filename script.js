console.clear();

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".section1",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        markers: false
      }
    })
    .to(".section.hero", {
      scale: 2,
      z: 250,
      transformOrigin: "center center",
      ease: "power1.inOut"
    })
    .to(
      ".section.hero",
      {
        scale: 1.4,
        transformOrigin: "center center",
        ease: "power1.inOut"
      },
      "<"
    );
});

$(document).ready(function() {
   $.fn.darkenScroll = function() {
    var elem = $( this );
    self = this;

    $(window).on('scroll', function(){
      scroll = $(document).scrollTop();
      offsetTop = elem.offset().top + elem.outerHeight();
      opacity = 1 / offsetTop * scroll;
      if (opacity > 0 && opacity < 1) {
        elem.css({'box-shadow': '10000px 0 0 0 rgba(32,32,32,' + opacity + ') inset'});
      }
    })
  }
  $('.section.hero').darkenScroll();
})

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}