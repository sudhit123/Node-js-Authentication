const mongoose=require('mongoose')

const userSchema =new mongoose.Schema({
    Username:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true
    },
    Age:{
        type:Number,
        require:true
    },
    Date:{
        type:Date,
        default:Date.now
    }
}) 

module.exports=mongoose.model('user',userSchema)