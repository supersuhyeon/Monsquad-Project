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

//리팩토링필요

const descripEl = document.querySelector('.text-description')
const descripEl2 = document.querySelector('.text-description2')
const toggleBtn = document.querySelector('.toggle-icon')
const toggleBtn2 = document.querySelector('.toggle-icon2')
let isHideDescription = false;

toggleBtn.addEventListener('click', function(){
    isHideDescription = !isHideDescription
    if(isHideDescription){
        //hide
        descripEl.classList.add('hide')
    }else{
        //show
        descripEl.classList.remove('hide')
    }
})


toggleBtn2.addEventListener('click', function(){
    isHideDescription = !isHideDescription
    if(isHideDescription){
        //hide
        descripEl2.classList.add('hide')
    }else{
        //show
        descripEl2.classList.remove('hide')
    }
})



function count(type)  {
    // 결과를 표시할 element
    const resultElement = document.getElementById('result');
    
    // 현재 화면에 표시된 값
    let number = resultElement.innerText;
    
    // 더하기/빼기
    if(type === 'plus') {
      number = parseInt(number) + 1;
    }else if(type === 'minus')  {
      number = parseInt(number) - 1;
      if(number < 0){
          return
      }
    }
    
    
    // 결과 출력
    resultElement.innerText = number;
    const stockEl = document.querySelector('.stock')

    if(number >= 2){
        stockEl.innerHTML = "<img src='/PRODUCTDETAILS/details_img/error.png'> Out of stock"
        // stockEl.innerText = "out of stock"
    }else if(number < 2 && number > 0){
        stockEl.innerHTML = "<img src='/PRODUCTDETAILS/details_img/check.png'> Available on Amazon"
    }else if(number === 0){
        stockEl.innerText = '';
    }
  }

  