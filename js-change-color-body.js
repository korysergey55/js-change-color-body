//  Замена цвета в body
const colors = ['tomato', 'teal', 'orange', 'green', 'skyblue', 'deeppink'];
const min = 0;
const max = colors.length -1;
const randomColor = Math.round(Math.random() * (max - min) + min);
const color =  colors[randomColor];
console.log(color);
document.body.style.backgroundColor = color;
