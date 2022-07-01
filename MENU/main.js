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
        dynamicBullets: true,
        clickable: true
      },
  
});
