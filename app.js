const express = require('express');
const path = require('path');
const app = express();

// app.use(bodyparser.json());
// app.use((req, res, next) => {
//     console.log(req.url,req.method);
//     req.banana = 'banana'
//     next();
// })

// app.get('/',(req,res)=>{
//     console.log(req.banana)
//     res.send('MiddleWare');
// })


// using express routes

app.use('/public',express.static(path.join(__dirname,'static')));
app.set('view engine','ejs');

const people = require('./routes/people');

app.use('/people',people);

app.get('/:userQuery',(req,res)=>{
    res.render('index',{data : {userQuery: req.params.userQuery,
                        searchResults : ['book1', 'book2', 'book3'],
                        loggedIn : true,
                        username : 'Sava' }});
});

app.listen(3000);