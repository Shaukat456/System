const express=require('express')
const app=express()
const port =process.env.PORT || 80
require('./db/conn')
const User=require('./models/user')

app.use(express.urlencoded({extended:false}))
app.use(express.json())



app.get('/',(req,res)=>{
    res.send('HELLO')
    
})


app.post('/Orders',(req,res)=>{
    
})

app.post('/SignUP',async(req,res)=>{
    try {
        const RegUser= new User(req.body)
      const saved= await RegUser.save()
      res.send('Signed Up')
      console.log(saved)
    } catch (error) {
        console.log(error)
    }
    
})



app.listen(port,()=>{
    console.log(`listening on PORT ${port}`);
})

