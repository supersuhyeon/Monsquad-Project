const menuIcon = document.querySelector('#menubtn')
const rightMenuBar = document.querySelector('.rightmenubar')

menuIcon.addEventListener('click', (e)=>{
    if(rightMenuBar.classList.contains("active")) {
        //메뉴 slide off
        rightMenuBar.classList.remove('active')
        document.getElementById('menubtn').src = "./menu_img/menuicon.png"
        menuIcon.classList.add('btnreverse')
        menuIcon.classList.remove('btnrotate')

        
    } else{
        //메뉴 slide on
        rightMenuBar.classList.add('active')
        document.getElementById('menubtn').src = "./menu_img/menuicon2.png"
        menuIcon.classList.add('btnrotate')
        menuIcon.classList.remove('btnreverse')
    }
})

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

//lodash_ throttle(함수,시간)
//gsap.to() 애니메이션

const badgeEl = document.querySelector('header .badges')

window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY)
    if(window.scrollY > 500){
        //hide
        // badgeEl.style.display = 'none'
        // gsap.to(요소,지속시간,옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0, //객체데이터형태로 넣어야함
            display: 'none'
        })

    }else{
        // show
        // badgeEl.style.display = 'block'
        gsap.to(badgeEl, .6, {
            opacity: 1, //객체데이터형태로 넣어야함
            display: 'block'
        })
    }
},300)) //0.3s 단위로 함수 제어