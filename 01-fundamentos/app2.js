const fs = require('fs');

const data = fs.readFileSync('README.md','utf8'); //Codigo bloqueante
//sin utf8 podria retornar el binario del md

const newData = data.replace(/React/ig,'Angular');

fs.writeFileSync('README-Angular.md',newData);
