document.querySelector('button').addEventListener('click', function () {
   document.body.style.backgroundColor = generateColor();
   document.querySelector('h2').innerHTML = generateColor();
});

function generateColor() {
   const red = Math.floor(Math.random() * 255);
   const green = Math.floor(Math.random() * 255);
   const blue = Math.floor(Math.random() * 255);
   return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
