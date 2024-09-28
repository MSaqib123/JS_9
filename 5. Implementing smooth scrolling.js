'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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
btnsOpenModal.forEach(btn => btn.addEventListener('click',openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



//________________________________________________________
//__________________ Smooth Scroling _____________________
//________________________________________________________
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click',function(e){
    //------- 1. Coord  B/w ViewPort and Sectin -----------
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);

    //------- 2. Coord  B/w ViewPort and Button -----------
    console.log(e.target.getBoundingClientRect());

    //------- 3. Current Scroll (x/y) -----------
    console.log("Current scroll X : ",window.pageXOffset);
    console.log("Current scroll Y : ",window.pageYOffset);

    //------- 4. ViewPort Height, width -----------
    console.log("ViewPort Height : ",document.documentElement.clientHeight);
    console.log("ViewPort width : ",document.documentElement.clientWidth);

    //==========================================
    //============= Scroll 1st Way ==============
    //==========================================
    // console.log(s1coords.left+window.pageXOffset,s1coords.top+window.pageYOffset);
    // window.scrollTo(s1coords.left+window.pageXOffset,s1coords.top+window.pageYOffset);
    window.scroll({
        left:s1coords.left+window.pageXOffset,
        top:s1coords.top+window.pageYOffset,
        behavior:'smooth'
    })

    //==========================================
    //============= Scroll 2nd Way =============
    //==========================================
    section1.scrollIntoView({behavior:'smooth'})
})



