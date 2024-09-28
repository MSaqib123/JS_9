//3. DOM Base Creationg
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `We use cookies for improved functionallity and analytices. <button class="btn btn--close-cookie">Got it!</button`

const header = document.querySelector('.header');
header.after(message)

//==========================================================
//====================== 1. Style ==========================
//==========================================================
//1 set inline style
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

//2. Get Inline style
console.log(message.style.backgroundColor)
console.log(message.style.width)
//Error : i can not get external properites of style
console.log(message.style.color) //give empty 

//3. Get All Styles of Elements
console.log(getComputedStyle(message))
console.log(getComputedStyle(message).height)

//4. Add height to orignal height
message.style.height = Number.parseFloat(getComputedStyle(message).height,10)+30+'px';

//5. changing the style variable values  (changing Primary Color)
document.documentElement.style.setProperty('--color-primary','orangered')


//==========================================================
//==================== 2. Attributes =======================
//==========================================================
const logo= document.querySelector('.nav__logo');

//1. get attribute value
console.log(logo.alt)
console.log(logo.src)
console.log(logo.className)

//2. set attribute value
logo.alt = 'Beautiful minimalist logo';
console.log(logo.alt)
logo.src = "Pokemon"

//3. Non-Standard attributes
console.log(logo.designer)
console.log(logo.getAttribute('designer'))

//4. set Non-standard attribute
logo.setAttribute("Company","Ämfco")

//5. get same src
console.log(logo.getAttribute('src'))

//6. Data Attriute
console.log(logo.dataset.versionNumber)

//==========================================================
//====================== 3. Class ==========================
//==========================================================
logo.classList.add('a','b');
logo.classList.remove('a','b');
logo.classList.toggle('a');
logo.classList.contains('a');

//don't use this
logo.className = 'jonas'; //override all the class and write single class  fuck