const fs = require('fs');

// fs.readFile('./animals.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// fs.writeFile('./example.txt', 'I will be written to example.txt', err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file successfully written");
//   }
// });


fs.readFile('./animals.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    let animals = data.split("\n");
    let letter = process.argv[2].toUpperCase();
    let newAnimals = animals.filter(word => word[0] === letter).join("\n");
    fs.writeFile(`${letter}_animals.txt`, newAnimals);
  }
});
