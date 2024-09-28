//________________________________________________________
//__________________  DOM Traversing  _____________________
//________________________________________________________
const h1 = document.querySelector("h1");

//============= 1. Going downword : Child ============
console.log(h1.querySelectorAll('.highlight')); //give NodeList
console.log(h1.childNodes); //give NodeList   text,comment,.....
console.log(h1.children);

//============= 2. Going upword : Parent ============
console.log(h1.parentNode)
console.log(h1.parentElement)

//============= 3. Going upword : Parent (Nearest or Cloesest) ============
//its opposite to  querySelectoryAll ---> these find child no matter how deep is this
//closest find the  Parent   no matter how faar up in the DOM tree
console.log(h1.closest('.header'));
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';


//============= 4. Going Sideways : siblings ============
console.log(h1.previousSibling)

//very importent
console.log(h1.nextElementSibling)


console.log(h1.previousSibling);
console.log(h1.nextSibling);


//============= 5. if we need all siblings ============
//not next or preview then we use    (Move to Parent element then select all it child)
console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function(el){
    if(el !== h1){ //accepts
        el.style.transform = 'scale(0.5)'
    }
})