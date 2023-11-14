const fs = require('fs');

const content = fs.readFileSync('README.md','utf8'); //Codigo bloqueante(sincrono)

const wordCount = content.split(' ');

console.log(wordCount);

let contador = 0;

/* const reactWordCount = wordCount.map(word => {if(word.toLowerCase().includes('react')){
    contador++;
}}); */

//Una solución mas optima

const reactWordCount = content.match(/react/gi ?? []).length; // si no encuentra ninguno regresa vacio


console.log('Palabras: ', wordCount.length )
console.log('React: ', reactWordCount )