// pipes and pipe chaining (readable, writeable, and transform streams)
const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();

const readStream = fs.createReadStream('./example.txt');
const writeStream = fs.createWriteStream('example2.txt.gz');


// pipes all the content of readstream into writestream
readStream.pipe(gzip).pipe(writeStream);