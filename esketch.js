let canvaSpace = document.querySelector(".container");
let color = 'black'
createFlex();
//let MouseDown = false;


let btn = document.querySelector("#btn");
let btn2 = document.querySelector("#btn2");
btn.addEventListener('click', enterInput)
btn2.addEventListener('click', Remover);

//creating the sandbox lol
function createFlex(size = 16){
    let areas = size * size;
    
    let gridBasis = 100 / size;
    for(let i = 0; i < areas; i++){
        let gridPixel = document.createElement("div"); // next appent the child into the div container.
        canvaSpace.appendChild(gridPixel);
        gridPixel.classList.add('pixel-plate');
        // adding styling here
        document.querySelector(".pixel-plate"); // don't use the class as a query selector
        gridPixel.style.flexBasis = `${gridBasis}%`;
        //add the event lisener here
        gridPixel.addEventListener('mouseover', Drawing)
        
    }
   
}
//updating the flexbasis
function Remover(){
let Resetter = document.querySelectorAll('div[class="pixel-plate"]');
// called the array. getting by classnames wasn't effective
Resetter.forEach(el => el.remove());
}
// function call for input
function enterInput(){
    size = window.prompt("Input number", 16);
    createFlex(size); // this is the function we put in the event lisener
}
// create the color change buttons
function Drawing(){
let hue = Math.floor(Math.random()*360);
    if(color == 'black'){
        this.style.background = '#000';
    }
    else{
        this.style.background = `hsl(${hue}, 100%, 50%)`;
    }
}
//translate that to coloring the divs in the sandbox on mouseover event
function colorDivs(colorChoice){
    color = colorChoice;// gets the choice and assigns it to global color
}
//eraser function
function eraser(){
let eraser = document.querySelectorAll('div[class="pixel-plate"]');
eraser.forEach(el => el.style.background = '#fff')
}

// the eraser acts as an array of sorts. and the for each method circles through each item