//==========================================================================
//================= 2. Target Phase and  3. Bubling Phase ==================
//==========================================================================
// const randomInt = (min,max)=> Math.floor(Math.random()*(max-min+1)+min);
// const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;

// document.querySelector('.nav__link').addEventListener('click',function(e){
//     // e.target.style.backgroundColor = randomColor()
//     this.style.backgroundColor = randomColor()
//     console.log('nav__Link',e.target, e.currentTarget)

//     //this and CurrentTarget is same
//     console.log(e.currentTarget == this);

//     //Stop Propegation (bubbling) ==== We don't not stop propigation just of eduction Parpus
//     // e.stopPropagation();
// });

// //__ Navs Parent ____
// document.querySelector('.nav__links').addEventListener('click',function(e){
//     this.style.backgroundColor = randomColor()
//     console.log('Contianer',e.target , e.currentTarget)
// });

// //__ nav Parent ____
// document.querySelector('.nav').addEventListener('click',function(e){
//     this.style.backgroundColor = randomColor()
//     console.log('Nav' , e.target, e.currentTarget)
// });


//==========================================================================
//============================== 1. Capture Phase ==========================
//==========================================================================
//we will set 3rd paramter in Parent Element  , false
//Option Parameter : true    (default Capture = false) --->   Nav_Parent 
//after thi  the Capturing 1st will be show   from parent to Child click

const randomInt = (min,max)=> Math.floor(Math.random()*(max-min+1)+min);
const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;

document.querySelector('.nav__link').addEventListener('click',function(e){
    // e.target.style.backgroundColor = randomColor()
    this.style.backgroundColor = randomColor()
    console.log('nav__Link',e.target, e.currentTarget)

    //this and CurrentTarget is same
    console.log(e.currentTarget == this);
});

//__ Navs Parent ____
document.querySelector('.nav__links').addEventListener('click',function(e){
    this.style.backgroundColor = randomColor()
    console.log('Contianer',e.target , e.currentTarget)
});

//__ nav Parent ____ 
document.querySelector('.nav').addEventListener('click',function(e){
    this.style.backgroundColor = randomColor()
    console.log('Nav' , e.target, e.currentTarget)
},true);
