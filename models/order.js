const mongoose=require('mongoose')



const OrdersSchema=mongoose.Schema({
   name:{
       type:String,
      
   },
   thing:{
       type:String,
       required:[true,"You have no orders yet"]
   }
    
})

const Order= new mongoose.model('Order',OrdersSchema)


module.exports=Order;




