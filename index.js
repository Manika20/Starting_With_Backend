const express = require('express');
const app = express();
const port =8000;
//connection to database.
const db = require('./config/mongoose')


//to encode the string body
app.use(express.urlencoded());

//schema
//const list = require('./models/todolist')


//use express router
// any request that comes in goes to routes.than routes deside
app.use('/',require('./routes'));

// using the assets
app.use(express.static('assets'));
//set up the view engine
app.set('view engine',"ejs");
app.set('views','./views');
app.listen(port,function(err)
{
    if(err)
    {
     
        console.log(`Error in running the server!! ${err}`);
        return;
    }
    console.log(`Server is running on port ${port}`);
    return 
});