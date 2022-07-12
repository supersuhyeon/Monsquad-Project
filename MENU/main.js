const badgeEl = document.querySelector('.badges')

window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY)
    if(window.scrollY > 500){
        //hide
        
        // gsap.to(요소,지속시간,옵션);
        gsap.to(badgeEl,.6,{
            opacity:0,
            display:'none'
        })


    }else{
        // show
        
        gsap.to(badgeEl,.6,{
            opacity:1,
            display:'block'
        })
    }
},300)) //0.3s 단위로 함수 제어



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

