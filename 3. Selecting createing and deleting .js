//====================================================
//=================== 1. Selectiong ==================
//====================================================
//---- 1. documentElement ----
//selec complete html
console.log(document.documentElement)
//---- 2. Header ----
console.log(document.head)
//---- 3. Body ----
console.log(document.body)

//---- 4. Query Selector ----
//to Select 1st Element   (it can be  id,class,tag base)
console.log(document.querySelector('.header'));

//---- 5. Query Selector All ----
//to Select all List Element   (it can be  class,tag) id is for unique
console.log(document.querySelector('.section'));
const allSections =  document.querySelector('.section');
console.log(allSections)

//---- 6. getElementById() ----
//its return single id base element
const sect = document.getElementById('section--1');


//---- 7. getElementsByTagName() ----
//its return  (NodeList  Life_Collection)
const allButtons = document.getElementsByTagName("button");
console.log(allButtons)

//---- 8. getElementsByClassName() ----
//its return  (NodeList  Life_Collection)
const allButtonsbyClass = document.getElementsByClassName("btn");
console.log(allButtonsbyClass)


//====================================================
//=================== 2. Inserting ===================
//====================================================
//1. (.insertAdjacentHTML) ES6 way  but we can also create with DOM way

//2. Template String    (we can create element by temaplate string , litral strings)

//3. DOM Base Creationg
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `We use cookies for improved functionallity and analytices. <button class="btn btn--close-cookie">Got it!</button`

const header = document.querySelector('.header');

//__1st Element append 
//header.prepend(message)

//__Last Element append 
//header.append(message)

//__1st Sibling 
//header.before(message)

//__last Sibling
header.after(message)

//__CloneNode (CompyElement)
// header.after(message.cloneNode(true))
// header.prepend(message.cloneNode(true))

//====================================================
//=================== 3. Deleting ====================
//====================================================
let deleteMesage = function(){
    //___ by Remove ___
    //message.remove();

    //___ by ParentElement (DOM Traversiong process) ____
    message.parentElement.removeChild(message);
}
document.querySelector('.btn--close-cookie').addEventListener('click',deleteMesage)
