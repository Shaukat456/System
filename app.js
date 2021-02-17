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
    try {

        // console.log(saved)

        const mail = req.body.email; // HTML "name" property will be set to email


        User.findOne({ email: mail }, async function (err, myUser) {
            if (!err) {
                const RegUser = new User(req.body)
                const Saved = await RegUser.save()
                console.log(Saved)
                res.send('USER REGISTERED')

            }
            else {
                res.send('USER ALREADY EXIST')
            }

        })





    } catch (error) {
        console.log(error)
    }

})



app.listen(port, () => {
    console.log(`listening on PORT ${port}`);
})

