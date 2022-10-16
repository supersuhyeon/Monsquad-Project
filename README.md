## Skateborad Branding Website - Monsquad

#### web version

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/94214512/190925200-f849410e-1c37-44a3-a0ad-e4fa60171d97.gif)

#### mobile version

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/94214512/190925068-7e821f3a-6a15-4065-b31d-6b8eedab929a.gif)

This is a skateboard brand's website that I created from scratch; concept, design, and code.
(_This is a fictional brand_) <br>[Monsquad-website](https://dashing-sawine-e8332f.netlify.app/)

### Goal of the project

Practice responsive design & development

### Languages

HTML, CSS, Javascript

### Features

1. Quantity display button<br>
   ![ezgif com-gif-maker (14)](https://user-images.githubusercontent.com/94214512/196019192-23fc9b84-f9b3-49d7-bd2a-b936f343f05f.gif)
   <br>

```html
<div class="qtydetails">
  <h1>QTY</h1>
  <div class="qtynumbers">
    <input type="button" onclick='count("minus")' value="-" />
    <div id="result">0</div>
    <input type="button" onclick='count("plus")' value="+" />
  </div>
  <div class="stock"></div>
</div>

<div class="pricedetails">
  <h1>$109.95</h1>
</div>
```

```js
function count(type) {
  // display result value
  const resultElement = document.querySelector("#result");

  // current value
  let number = resultElement.innerText;

  // plus/minus
  if (type === "plus") {
    number = parseInt(number) + 1;
  } else if (type === "minus") {
    number = parseInt(number) - 1;
    if (number < 0) {
      return;
    }
  }
  // updated result
  resultElement.innerText = number;

  const stockEl = document.querySelector(".stock");
  const priceEl = document.querySelector(".pricedetails h1");

  if (number >= 2) {
    stockEl.innerHTML =
      "<img src='/PRODUCTDETAILS/details_img/error.png'> Opps, Sorry! It is out of stock";
    // stockEl.innerText = "out of stock"
    priceEl.style.color = "red";
  } else if (number > 0 && number < 2) {
    stockEl.innerHTML =
      "<img src='/PRODUCTDETAILS/details_img/check.png'> Available on Amazon";
    priceEl.style.color = "#333"; //so that users can get an alert visually
  } else if (number === 0) {
    stockEl.innerHTML = "";
    // return;
  }
}
```

2. Unique left side menu bar with sliding animation and when users click the button, it transitions into a skull's finger ![3](https://user-images.githubusercontent.com/94214512/190931693-0c6a6a4c-8109-451e-85c1-0b07767e7bc4.png)![4](https://user-images.githubusercontent.com/94214512/190931690-5ecb5469-0bf9-47bb-9b21-0b9e668a87b0.png)

```js
const menuIcon = document.querySelector("#menubtn");
const rightMenuBar = document.querySelector(".rightmenubar");

menuIcon.addEventListener("click", (e) => {
  if (rightMenuBar.classList.contains("active")) {
    //menu slide off
    rightMenuBar.classList.remove("active");
    document.getElementById("menubtn").src = "/menuicon.png";
    menuIcon.classList.add("btnreverse");
    menuIcon.classList.remove("btnrotate");
  } else {
    //menu slide on
    rightMenuBar.classList.add("active");
    document.getElementById("menubtn").src = "/menuicon2.png";
    menuIcon.classList.add("btnrotate");
    menuIcon.classList.remove("btnreverse");
  }
});
```

3. Using input's radio type, created the collection's menu with HTML and CSS only.
   ![1](https://user-images.githubusercontent.com/94214512/190931494-8b37e46b-3191-44e9-ae98-12fd7561b9d3.png)
   ![2](https://user-images.githubusercontent.com/94214512/190931496-70ac1e60-dca5-4d5c-aa70-f076e60da59d.png)

```html
<input type="radio" id="tab-1" name="show" checked />
<input type="radio" id="tab-2" name="show" />
<input type="radio" id="tab-3" name="show" />
<input type="radio" id="tab-4" name="show" />

<div class="tab">
  <label for="tab-1">Complete</label>
  <label for="tab-2">Wheels</label>
  <label for="tab-3">Decks</label>
  <label for="tab-4">Trucks</label>
</div>
```

```css
.collecmenu input[type="radio"] {
  display: none;
}
#tab-1:checked ~ .tab label:nth-child(1),
#tab-2:checked ~ .tab label:nth-child(2),
#tab-3:checked ~ .tab label:nth-child(3),
#tab-4:checked ~ .tab label:nth-child(4) {
  background-color: #ae5761;
  box-shadow: none;
  color: #fff;
}
.content > div {
  display: none;
}

#tab-1:checked ~ .content div:nth-child(1),
#tab-2:checked ~ .content div:nth-child(2),
#tab-3:checked ~ .content div:nth-child(3),
#tab-4:checked ~ .content div:nth-child(4) {
  display: block;
}

#tab-2:checked ~ .content div:nth-child(2),
#tab-3:checked ~ .content div:nth-child(3),
#tab-4:checked ~ .content div:nth-child(4) {
  border-bottom: 5px solid #333;
  min-height: 200px;
  margin-left: 0;
  margin-right: 0;
}
```

### Self-reflection

This project took me around a month of planning, designing, and implementing the branding. This included designing the logo, deciding on the color palette, character design, all for a target audience of teenage-aged boys.<br>
I always wanted to make new a branded website that is responsive so I'm happy with the results of my first responsive branded project. It was really tricky to set all the different sizes that devices require. <br> I will do further research the next time I make a responsive site, including about the various devices and focusing on their different viewports.<br>
10.02.2022) These days I have been working on my own portfolio website so I have checked my old code and readme files. I realized that there's some smelly code that I don't understand why I used it and missed some bugs that I was supposed to reset the value... whenever I have some time I better keep refactoring.
