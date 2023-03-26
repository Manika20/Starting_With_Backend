const express = require('express');
const app = express();
const port =8000;

//to encode the string body
app.use(express.urlencoded());

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