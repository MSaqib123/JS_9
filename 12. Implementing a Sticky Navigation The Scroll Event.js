'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

//_____________________________________________________________
//_________________________ Modal Window ______________________
//_____________________________________________________________
/* #region  Modal_Window */

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//___ ES6 ____
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/* #endregion */

//_____________________________________________________________
//_______________________ Button Scroling _____________________
//_____________________________________________________________
/* #region  Button Scrolling */
btnScrollTo.addEventListener('click', function (e) {
  //------- 1. Coord  B/w ViewPort and Sectin -----------
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  //------- 2. Coord  B/w ViewPort and Button -----------
  // console.log(e.target.getBoundingClientRect());

  //------- 3. Current Scroll (x/y) -----------
  // console.log("Current scroll X : ",window.pageXOffset);
  // console.log("Current scroll Y : ",window.pageYOffset);

  //------- 4. ViewPort Height, width -----------
  // console.log("ViewPort Height : ",document.documentElement.clientHeight);
  // console.log("ViewPort width : ",document.documentElement.clientWidth);

  //==========================================
  //============= Scroll 1st Way ==============
  //==========================================
  // console.log(s1coords.left+window.pageXOffset,s1coords.top+window.pageYOffset);
  // window.scrollTo(s1coords.left+window.pageXOffset,s1coords.top+window.pageYOffset);
  // window.scroll({
  //     left:s1coords.left+window.pageXOffset,
  //     top:s1coords.top+window.pageYOffset,
  //     behavior:'smooth'
  // })

  //======================================
  //========= Scroll 2nd Way =============
  //======================================
  section1.scrollIntoView({ behavior: 'smooth' });
});
/* #endregion */

//_____________________________________________________________
//______________________ Event Delegation _____________________
//_____________________________________________________________
/* #region  Event_Delegation*/
//_____________________________________________
//_________ WithOut Event Delegation __________
//_____________________________________________
//but this is not efficent way for web expericne because  if there is 1000 of element then 1000 of funciton copies will be created
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener("click",function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior:'smooth'
//     });
//   })
// })

//_____________________________________________
//_________ With Event Delegation _____________
//_____________________________________________
//Event Delegation more Efficent then above logic
// 1. Add event listener to Common parent element
// 2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();

  //Matching stratgy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});
//event delegation also work with dyanmic  element creationg.

/* #endregion */

//_____________________________________________________________
//_______________ Building tabbed Component ___________________
//_____________________________________________________________
/* #region Building tabbed Component */
//=== fucking logic ===
// tabs.forEach(t=> t.addEventListener('click',()=>{
//     console.log('tab')
// }))

//===> Event Delegation ===
tabsContainer.addEventListener('click', function (e) {
  // const clicked = e.target;
  // const clickedParent = e.target.parentElement;
  // console.log(clicked,clickedParent)
  const clickedTarget = e.target.closest('.operations__tab');
  console.log(clickedTarget);

  //if there is no  clicktarget  .opration_tabs then  return
  //Guard Clause
  if (!clickedTarget) return;

  //Removeing active
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //Activate tab
  clickedTarget.classList.add('operations__tab--active');

  //Activate content
  document
    .querySelector(`.operations__content--${clickedTarget.dataset.tab}`)
    .classList.add('operations__content--active');
});
/* #endregion */

//_____________________________________________________________
//______________ Pass Argument to Event Handler _______________
//_____________________________________________________________
/* #region  HoverLink _ PassingArguments */
//---------------------------------------
//-------------- 1st Way ----------------
//---------------------------------------
// nav.addEventListener('mouseover',function(e){
//     //console.log(e.target,this);
//     //hover work on only  nav__link
//     if(e.target.classList.contains('nav__link')){
//         const link = e.target;

//         //Move to Parent for sibling--->
//         //______ ???   (Why Parent Element) ___
//         const sibling = link.closest('.nav').querySelectorAll('.nav__link')
//         //becuase we want to make all Nav elmenet opacity  Accept the selected one
//         //hum selected element ka ilawaa jitna sibling elements han un pr  opacit add krna chtaa han
//         console.log(link);

//         //______ Logo (logo bhi opacity hoga) ___
//         const logo = link.closest('.nav').querySelector('img');

//         //______ change Opacity to all Siblings _____
//         sibling.forEach(el=>{
//             //el.style.opacity  = 0.5
//             if(el !== link) el.style.opacity  = 0.5
//         })

//         logo.style.opacity = 0.5;

//     }
// })
// nav.addEventListener('mouseout',function(e){
//     //console.log(e.target,this);
//     //hover work on only  nav__link
//     if(e.target.classList.contains('nav__link')){
//         const link = e.target;

//         //Move to Parent for sibling--->
//         //______ ???   (Why Parent Element) ___
//         const sibling = link.closest('.nav').querySelectorAll('.nav__link')
//         //becuase we want to make all Nav elmenet opacity  Accept the selected one
//         //hum selected element ka ilawaa jitna sibling elements han un pr  opacit add krna chtaa han
//         console.log(link);

//         //______ Logo (logo bhi opacity hoga) ___
//         const logo = link.closest('.nav').querySelector('img');

//         //______ change Opacity to all Siblings _____
//         sibling.forEach(el=>{
//             //el.style.opacity  = 0.5
//             if(el !== link) el.style.opacity  = 1
//         })
//         logo.style.opacity = 1;
//     }
// })

//---------------------------------------
//-------------- 2nd Way ----------------
//---------------------------------------
const handleHover = function (e) {
  //,opacity){
  //console.log(e.target,this);
  //hover work on only  nav__link
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;

    //Move to Parent for sibling--->
    //______ ???   (Why Parent Element) ___
    const sibling = link.closest('.nav').querySelectorAll('.nav__link');
    //becuase we want to make all Nav elmenet opacity  Accept the selected one
    //hum selected element ka ilawaa jitna sibling elements han un pr  opacit add krna chtaa han
    // console.log(link);

    //______ Logo (logo bhi opacity hoga) ___
    const logo = link.closest('.nav').querySelector('img');

    //______ change Opacity to all Siblings _____
    sibling.forEach(el => {
      //el.style.opacity  = 0.5
      if (el !== link) el.style.opacity = this; //opacity
    });

    logo.style.opacity = this; //opacity;

    //--- by defualt   this , e.currentTarget  will same value but ---
    //we can change (this) keyword value
    //console.log(this,e.currentTarget);
  }
};
//----- Issue  Parameter to EventHandler -----
//kyun ka JS accept function in  function(){---}
//not  other regular values handleHover(e,1)
// nav.addEventListener('mouseover',handleHover(e,0.5))
// nav.addEventListener('mouseout',handleHover(e,1))

//------------------------
//----- Solution_1 ------
//------------------------
// nav.addEventListener('mouseover',function(e){
//     handleHover(e,0.5)
// })
// nav.addEventListener('mouseout',function(e){
//     handleHover(e,1)
// })

//------------------------
//----- Solution_2 ------ Bind() method
//------------------------
//--- by defualt   this , e.currentTarget  will same value but ---
//we can change (this) keyword value by  Bind Method
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));
//we can pass mUltiple values by array or object
/* #endregion */

//_____________________________________________________________
//______________ Sticky Navgation the scroll Event ____________
//_____________________________________________________________
/* #region  StickyNavbar */

/* #region  Fucking Way */
//-------------------------------------
//----- Fucking Way to Implement ------
//-------------------------------------
//because scroll event make website slow because its run on everytitme on scroll event
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });
/* #endregion */

/* #region  Best way Intersection Observer API */
//-------------------------------------
//----- Intersection Observer API -----
//-------------------------------------
//What is Intersection Observer API and why its so helpfull??
//Well this API allow our code to basically Observes to the way that a certain target element intersets another elements, or the way it intersect the viewport
//Yeh API hamaray code ko asaan tareeqay se yeh dekhne ki ijazat deti hai ke aik khaas element doosray elements ya viewport ke saath kis tarah interact karta hai.
const obsCallBack = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};
const obsOptions = {
  root: null, //Viewport because that's the root
  threshold: [0, 0.2],
  //threshold: [0,1,0.2] //if 1 then  the callback only be called when 100% of target is actually visible in viewport
  //threshold: [0,0.2] //0 our callback will trigger each time that target element moves completly out of view or soon as enter the view
  //threshold:0.1 //Limit //10% percentage of Intersection at which observe will be called
};

const observerTest = new IntersectionObserver(obsCallBack, obsOptions); //(callbackfunction , objectOfOption)
observerTest.observe(section1);

//_____Note______
//whenever the 1st (section1)  so our target here , is intersect the viewport at 10%
//null is Root ViewPOrt Element  , throushold(limit) is 10%
//so whenever that will hepend then this callbackFunction obsCallBack  will get called and that's no matter if we are scrolling
/* #endregion */

/* #region  Impement Observer to Navbar */
//--------------------------------------------
//----- Implement Obser on StickyNavbar ------
//--------------------------------------------
const stickyNav = function (entries) {
  //there is only 1 threshold so we don't need   foreach to loop all entries
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('sticky'); // Add 'sticky' when the header is not intersecting
  } else {
    nav.classList.remove('sticky'); // Remove 'sticky' when the header is intersecting
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: -navHeight + 'px', //'-90px'
});

headerObserver.observe(header);

/* #endregion */

/* #endregion */
