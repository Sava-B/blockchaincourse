const fs = require('fs');

const readStream = fs.createReadStream('./sample-2mb-text-file.txt','utf-8');

// const writeStream = fs.createWriteStream('example2.txt');

readStream.on('data',(chunk) => {
    console.log(chunk);
});