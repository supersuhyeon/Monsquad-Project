
new Swiper('.mySwiper', {
    loop:true,
    autoplay:{
        delay:5000
    },
    pagination: {
        el: ".swiper-pagination",
        // dynamicBullets: true,
        clickable: true
      },
  
});



function floatingObject(selector){
gsap.to(selector, 1, {
    y: 20,
    repeat: -1, //infinite
    yoyo: true,
    ease: Power1.easeOut
} )
}

floatingObject('.floatingbtn')


    $(document).ready(function(){
      $('.slider').bxSlider({
          auto: true,
          speed : 300,
          autoHover: true,
          autoControls: false,
          controls: false,
          pager: true,
      });
    });

