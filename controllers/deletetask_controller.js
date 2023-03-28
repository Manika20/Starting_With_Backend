const list = require('../models/todolist')
module.exports.delete = function(req,res)
{
    let id = req.query.id;
    console.log(id);
   list.findByIdAndDelete(id,function(err)
   {
    if(err)
    {
        console.log("cannot delete error occured!!");
        return;
    }
    return res.redirect('back');
});
}