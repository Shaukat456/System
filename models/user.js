const mongoose=require('mongoose')



const VisitorSchema=mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
       type: String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        
    },
    phonenumber:{
        type:Number,
        maxlength:11
    }
    
})

const User=new mongoose.model('User',VisitorSchema)


module.exports= User;