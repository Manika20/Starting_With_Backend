module.exports.data = function(req,res)
{
    console.log(req.body.name);
    console.log(req.body.phone);
    contact_list.pushback(body);
    console.log("finally!!")
    return res.redirect('/users/profile');
}