const list = require('../models/todolist')
//console.log(list);
module.exports.post = function(req,res)
{

    list.find({},function(err,tasks)
    {
        if(err)
        {
            console.log("error in fetching!!");
            return;
        }
        //console.log("SUccessfullll!!")
        return res.render('user',
        {
        title:"User", 
        todo_list: tasks
       });
    });
}