## Skateborad Branding Website - Monsquad

[Monsquad-website](https://dashing-sawine-e8332f.netlify.app/)

#### web version

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/94214512/190925200-f849410e-1c37-44a3-a0ad-e4fa60171d97.gif)

#### mobile version

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/94214512/190925068-7e821f3a-6a15-4065-b31d-6b8eedab929a.gif)

This is a skateboard brand's website that I created from scratch; concept, design, and code <br>
\*This is a fictional brand

### Goal of the project

Practice responsive design & development

### Languages

HTML, CSS, Javascript

### Features

1. Unique left side menu bar with sliding animation and when users click the button, it transitions into a skull's finger <img width="1502" alt="Screen Shot 2022-09-18 at 1 23 41 PM" src="https://user-images.githubusercontent.com/94214512/190926853-30364547-54ce-4a13-9e08-2e7293b33e39.png">
   <img width="755" alt="Screen Shot 2022-09-18 at 1 22 53 PM" src="https://user-images.githubusercontent.com/94214512/190926833-7db16ed3-b886-4eb2-be8e-265a0e64595a.png">

2. Using input's radio type, created the collection's menu with HTML and CSS only.
   <img width="650" alt="Screen Shot 2022-09-18 at 1 14 35 PM" src="https://user-images.githubusercontent.com/94214512/190926563-c49eaebe-5db4-40ca-8daa-88d6a642daaa.png">
   <img width="1288" alt="Screen Shot 2022-09-18 at 1 15 57 PM" src="https://user-images.githubusercontent.com/94214512/190926600-4cd35ae9-e7f5-4a78-b0f6-c6107245e37b.png">

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
I always wanted to make new a branded website that is responsive so I'm happy with the results of my first responsive branded project. It was really tricky to set all the different sizes that devices require. <br> I will do further research the next time I make a responsive site, including about the various devices and focusing on their different viewports.
