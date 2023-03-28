const express = require('express');
const app = express();
const port =8000;
// using the assets
app.use(express.static('assets'));

//layouts library
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
// abstract styles and scripts from subpages to layouts.
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
//connection to database.
const db = require('./config/mongoose')


//to encode the string body
app.use(express.urlencoded());

//schema
//const list = require('./models/todolist')


//use express router
// any request that comes in goes to routes.than routes deside
app.use('/',require('./routes'));


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