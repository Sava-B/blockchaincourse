const fs = require('fs');

// fs.mkdir('tutorial',(err) => {
//     if (err) 
//         console.log(err);
//     else {
//         fs.writeFile('./tutorial/example.txt','123',(err)=>{
//         if(err)
//             console.log(err);
//         else    
//             console.log('successfully created file');
//         })
//     } 
    
// });

// fs.unlink('./tutorial/example.txt',(err)=>{
//     if (err)
//         console.log(err);
//     else   
//     fs.rmdir('./tutorial',(err)=>{
//         if (err)
//             console.log(err);
//         else   
//             console.log('Folder successfully deleted');
//     })
    
// })



// read all the files within a folder and then delete them
fs.readdir('tutorial',(err, files) => {
    if(err)
        console.log(err);
    else{
        for (let file of files) {
            fs.unlink('./tutorial/' + file, (err)=>{
                if(err)
                    console.log(err);
                else{
                    console.log('successfully deleted file');
                }
                    
            })
        }
    }
})




// //create a file
// fs.writeFile('example.txt', 'this is an example', (err)=>{
//     if(err) 
//         console.log(err);
//     else {
//         console.log('file successfully created');
//         fs.readFile('example.txt','utf8',(err, file)=>{
//             if(err)
//                 console.log(err);
//             else
//                 console.log(file);
//         })
//     }
// });


// // rename a file
// fs.rename('example.txt', 'example2.txt', (err)=>{
//     if(err) 
//         console.log(err);
//     else
//         console.log('Successfully renamed file');
// })


// // append to a file
// fs.appendFile('example2.txt','Some data being appended',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('successfully appended file');
// })


// delete a file
// fs.unlink('example2.txt',(err)=>{
//     if (err)
//         console.log(err);
//     else   
//         console.log('File successfully deleted');
// })



