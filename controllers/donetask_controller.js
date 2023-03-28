const list = require('../models/todolist')
module.exports.done = function(req,res)
{
    
    let id = req.query.id;
    let comp = req.query.done;
    let select;
    if(comp=="true")
    {
        select="false";

    }
    else{
        select = "true";
    }
    console.log(id);
   console.log(comp);
   console.log(select);
    list.findOneAndUpdate({_id:id},{done:select},function(err,data)
    {
        if(err)
        {
            console.log("Error!! could not complete the task!!");
            return;
        }
        
      return res.redirect('back');     

           })
}