const menuIcon = document.querySelector('#menubtn')
const rightMenuBar = document.querySelector('.rightmenubar')

menuIcon.addEventListener('click', (e)=>{
    if(rightMenuBar.classList.contains("active")) {
        //메뉴 slide off
        rightMenuBar.classList.remove('active')
        document.getElementById('menubtn').src = "/MENU/menu_img/menuicon.png"
        menuIcon.classList.add('btnreverse')
        menuIcon.classList.remove('btnrotate')

        
    } else{
        //메뉴 slide on
        rightMenuBar.classList.add('active')
        document.getElementById('menubtn').src = "/MENU/menu_img/menuicon2.png"
        menuIcon.classList.add('btnrotate')
        menuIcon.classList.remove('btnreverse')
    }
})

const mobileIcon = document.querySelector('.menuicon-mobile')
const mobileDrop = document.querySelector('.dropmenu-mobile')

mobileIcon.addEventListener('click', (e)=>{
    mobileDrop.classList.toggle('active')
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


window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY)
    if(window.scrollY > 500){
        //hide
        
        // gsap.to(요소,지속시간,옵션);
        gsap.to('#go-top',.2,{
            x: 0,
        })


    }else{
        // show
        
        gsap.to('#go-top',.2,{
            x: 100,
        })
    }
},300)) //0.3s 단위로 함수 제어

const goTopEl = document.querySelector('#go-top')
goTopEl.addEventListener('click', (e)=>{
    // window.scrollTo(0,0)
gsap.to(window,.7,{
    scrollTo: 0
}
)
})


Sticker.init('.sticker');