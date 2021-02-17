 const mongoose=require('mongoose')


 mongoose.connect('mongodb://localhost:27017/VISITORS',{
     useNewUrlParser:true,
     useUnifiedTopology:true,
     useCreateIndex:true,
     useFindAndModify:true,
    
 }).then(()=>{
     console.log('Connected Successfully')
 }).catch(()=>{
     console.log('Connection Error')
 })