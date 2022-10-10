// pipes and pipe chaining (readable, writeable, and transform streams)
const fs = require('fs');
const zlib = require('zlib');
const gunzip = zlib.createGunzip();

const readStream = fs.createReadStream('./example2.txt.gz');
const writeStream = fs.createWriteStream('uncompressed.txt');


// pipes all the content of readstream into writestream
readStream.pipe(gunzip).pipe(writeStream);