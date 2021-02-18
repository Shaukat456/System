const mongoose=require('mongoose')
const validator=require('validator')


const VisitorSchema=mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        unique:[true,' NAME ALREADY EXISTS ']
    },
    email:{
        type:String,
        unique:[true,' Email ALREADY EXISTS ']
    },
    password:{
        type:String,
        required:[true,'Password Field is Empty'],
        
        
        
    },
    phonenumber:{
        type:Number,
        maxlength:[11,'Wrong Phone Number']
    }
    
})








const User=new mongoose.model('User',VisitorSchema)


// VisitorSchema.pre('save', function(next){
//     var user = this ;
//     User.find($or [{fullname: user.fullname}, {email: user.email}],
//               function(err, users){
//       if(err) {
//         return next(err);
//       } else if(users) {
//         if (_.find(users , {email: user.email})){
//           user.invalidate('email', 'email is already registered'); 
//           next( new Error("email is already registered"));
//         }
//         else if (_.find(users , {fullname: user.fullname})){
//           user.invalidate('username', 'username is already taken'); 
//           next( new Error("username is already taken"));
//         }
//       }
//       else{
//         next();
//       }   
//     })
//   })





module.exports= User;