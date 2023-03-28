const list = require('../models/todolist')
module.exports.data = function(req,res)
{
    //console.log(req.body.name);
    //console.log(req.body.phone);
    //console.log("finally!!")
    list.create(
        {
            task:req.body.task,
            date:req.body.date,
            done:false
        }
    )
    return res.redirect('/users');
}