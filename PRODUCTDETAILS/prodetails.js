new Swiper('.menuimg .mySwiper', {
    loop:true,
    autoplay:{
        delay:5000
    },
    pagination: {
        el: ".menuimg .swiper-pagination",
        // dynamicBullets: true,
        clickable: true
      },
  
});

new Swiper(".prowrappers .mySwiper", {
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
      el: ".prowrappers .swiper-pagination",
      clickable: true,
      type: "fraction",
    }
  });

const menuContainers = document.querySelectorAll('.menutab-container')
menuContainers.forEach((menuContainer)=>{
  let doesDescriptionShow = false;
  const test = menuContainer.children[0]
  test.addEventListener('click',()=>{
    doesDescriptionShow = !doesDescriptionShow
    if(doesDescriptionShow){
      menuContainer.children[1].classList.add('open')
  }else{
    menuContainer.children[1].classList.remove('open')
  }  
})
})


function count(type)  {
    // 결과를 표시할 element
    const resultElement = document.querySelector('#result');
    
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
    const priceEl = document.querySelector('.pricedetails h1')

    if(number >= 2){
        stockEl.innerHTML = "<img src='/PRODUCTDETAILS/details_img/error.png'> Opps, Sorry! It is out of stock"
        // stockEl.innerText = "out of stock"
        priceEl.style.color = 'red';
    }else if(number > 0 && number < 2){
        stockEl.innerHTML = "<img src='/PRODUCTDETAILS/details_img/check.png'> Available on Amazon";
        priceEl.style.color = '#333';
    }else if(number === 0){
        stockEl.innerHTML = '';
        // return;
    }
  }

  const open = () => {
    document.querySelector(".modal").classList.remove("hidden");
    document.body.classList.add("stop-scroll");
    gsap.to(goTopEl, .6, {
        opacity: 0,
        display : 'none'})

  }

  const close = () => {
    document.querySelector(".modal").classList.add("hidden");
    document.body.classList.remove("stop-scroll");
  }

  document.querySelector(".sizeguide").addEventListener("click", open);
  document.querySelector(".closebtn").addEventListener("click", close);
  document.querySelector(".bgoverlay").addEventListener("click", close);

new Swiper(".youmay .mySwiper", {
    slidesPerView : 4,
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
      el: ".youmay .swiper-pagination",
      clickable: true,
      type: "progressbar",
    },
    navigation: {
      nextEl: ".youmay .swiper-button-next",
      prevEl: ".youmay .swiper-button-prev",
    },
  });

  new Swiper(".youmaymobileslide .mySwiper", {
    slidesPerView : 2,
    spaceBetween: 5,
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
      el: ".youmaymobileslide .swiper-pagination",
      clickable: true,
      type: "fraction",
    },
    navigation: {
      nextEl: ".youmaymobileslide .swiper-button-next",
      prevEl: ".youmaymobileslide .swiper-button-prev",
    },
  });