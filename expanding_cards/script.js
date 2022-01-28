const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
}
)

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

/* 

let myArray = [1,2,3];
let i = 56;
let j = 5;

function addToArray () {
    return myArray.push(i);
}

function removeFromArray () {
    return myArray.pop(j);
}

function readTheArray () {
    for (let i=0; i<myArray.length; i++) {
        console.log(myArray[i])
    }
}

addToArray();
//removeFromArray(5);
readTheArray()
console.log(myArray) */

/* const myArray = [];


function addToArray (element) {
  myArray.push(element);
}

function removeFromArray (element) {
   const index = myArray.indexOf(element);
if (index > -1) {
myArray.splice(index, 1);
}
}

function readTheArray () {
    for (let i=0; i<myArray.length; i++) {
        console.log(myArray[i])
    }
}

addToArray(1);
addToArray(2);
addToArray(3);
removeFromArray(2);
readTheArray() */