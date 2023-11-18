const fs = require("fs");


const Data = fs.readFileSync('./NoticeCategoryItem/data.json', {encoding : 'utf8'});

console.log(Data)