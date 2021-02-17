const mongoose=require('mongoose')
const validator=require('validator')


const VisitorSchema=mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:String,
    password:{
        type:String,
        required:[true,'Password Field is Empty']
        
        
    },
    phonenumber:{
        type:Number,
        maxlength:[11,'Wrong Phone Number']
    }
    
})








const User=new mongoose.model('User',VisitorSchema)






module.exports= User;