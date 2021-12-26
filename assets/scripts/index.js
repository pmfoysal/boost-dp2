document.querySelector('button').addEventListener('click', function () {
   const color = generateColor();
   document.body.style.backgroundColor = color;
   document.querySelector('h2').innerHTML = color;
});

function generateColor() {
   let red = Math.floor(Math.random() * 255).toString(16);
   let green = Math.floor(Math.random() * 255).toString(16);
   let blue = Math.floor(Math.random() * 255).toString(16);

   red = red.length < 2 ? `0${red}` : red;
   green = green.length < 2 ? `0${green}` : green;
   blue = blue.length < 2 ? `0${blue}` : blue;

   return `#${red}${green}${blue}`;
}
