const menuIcon = document.querySelector('#menubtn')
const rightMenuBar = document.querySelector('.rightmenubar')

menuIcon.addEventListener('click', (e)=>{
    if(rightMenuBar.classList.contains("active")) {
        //메뉴 slide off
        rightMenuBar.classList.remove('active')
        document.getElementById('menubtn').src = "/menuicon.png"
        menuIcon.classList.add('btnreverse')
        menuIcon.classList.remove('btnrotate')

        
    } else{
        //메뉴 slide on
        rightMenuBar.classList.add('active')
        document.getElementById('menubtn').src = "/menuicon2.png"
        menuIcon.classList.add('btnrotate')
        menuIcon.classList.remove('btnreverse')
    }
})

const mobileIcon = document.querySelector('.menuicon-mobile')
const mobileDrop = document.querySelector('.dropmenu-mobile')

mobileIcon.addEventListener('click', (e)=>{
    mobileDrop.classList.toggle('active')
})

//lodash_ throttle(함수,시간)
//gsap.to() 애니메이션

const goTopEl = document.querySelector('#go-top')
window.addEventListener('scroll', _.throttle(function(){
    if(window.scrollY > 500){
        //show
        goTopEl.style.visibility = "visible"
        // gsap.to(요소,지속시간,옵션);
        gsap.to('#go-top',.2,{
            x: 0,
        })


    }else{
        // hide
        
        gsap.to('#go-top',.2,{
            x: 100,
        })
    }
},300)) //0.3s 단위로 함수 제어


goTopEl.addEventListener('click', (e)=>{
    // window.scrollTo(0,0)
gsap.to(window,.7,{
    scrollTo: 0
}
)
})
