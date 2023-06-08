// ************ to create an array to sleact color *****************
const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

// ******************sleact btn color Element ********************
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', ()=>{

    // get randomNumber between 0-3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})


// ************* create random Number to sleact array index **************

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}