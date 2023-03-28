const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema(
    {
        task:
        {
            type:String,
            required:true
        },
        date:
        {
            type:Date,
        },
        done:
        {
            type:Boolean
        }
       
    }
)
const List = mongoose.model('List',contactSchema);
module.exports = List;