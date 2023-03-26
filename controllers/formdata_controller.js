const list = require('../models/todolist')
module.exports.data = function(req,res)
{
    console.log(req.body.name);
    //console.log(req.body.phone);
    //console.log("finally!!")
    list.create(
        {
            task:req.body.name,
            date:req.body.phone
        }
    )
    return res.redirect('/users');
}