const express = require('express')
const app = express()
const port = process.env.PORT || 80
require('./db/conn')
const User = require('./models/user')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())



app.get('/', (req, res) => {
    res.send('HOME SCREEN')

})
















// app.post('/Orders',(req,res)=>{

// })

app.post('/SignUP', async (req, res) => {

    const { email } = req.body; // HTML "name" property will be set to email
    
    try {
        User.find({ email:email }, async(err,user) => {
            if (err) {
                return res.status(400).json({ msg: "Email  Already Exist" });
    
            } else {
                const RegUser = new User(req.body)
                const Saved = await RegUser.save()
                console.log(Saved)
                // console.log(myUser)
                res.send('USER REGISTERED')
            }})
    } catch (error) {
        res.send(error)
    }


}
)

app.get('/login' , async(req,res)=>{
    const { email ,pass } = req.body; // HTML "name" property will be set to email
    try {
        const FindUser=await User.find({email:email}, async(err,docs)=>{
         if(err){
             return err
         }
         else{
              return res.send(docs)
              console.log(docs)
         }
          


        })
        // console.log(FindUser)
        
    } catch (error) {
        res.send(error)
        console.log(error)
        res.send('user not found')

    }
})





            app.listen(port, () => {
                console.log(`listening on PORT ${port}`);
            })

