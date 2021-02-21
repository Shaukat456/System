const express = require('express')
const app = express()
const port = process.env.PORT || 80
require('./db/conn')
const User = require('./models/user')
const Order = require('./models/order')
const { json } = require('body-parser')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())



app.get('/', (req, res) => {
    res.send('HOME SCREEN')

})


//Placing and Seeing Orders


app.post('/Orders', async (req, res) => {
    const { order } = req.body;

    try {
    const RegisterOrder = new Order(req.body)
    const SavedOrder = await RegisterOrder.save()
    console.log(SavedOrder)
    res.send(["This  Has been placed as your order  ", SavedOrder])

    } catch (error) {
        res.send(error)
        console.log(error)
    }




})
app.get('/Orders', async (req, res) => {
    const { name } = req.body;

    const SeeOrders = await Order.find({ name: name }, (error, placedOrder) => {
        if(error){
            return console.log(error)
        }
        else{
        return [res.send(placedOrder), console.log(placedOrder)];

        }

    })


})

app.delete('/Orders',async(req,res)=>{
    const DeleteOrder=await Order.deleteMany({},(data,err)=>{
        console.log(data)
        return res.send('deleted')
    })
    console.log(DeleteOrder)
})




app.post('/SignUP', async (req, res) => {

    const { email } = req.body; // HTML "name" property will be set to email

    try {
        User.find({ email: email }, async (err, user) => {
            if (err) {
                return res.status(400).json({ msg: "Email  Already Exist" });

            } else {
                const RegUser = new User(req.body)
                const Saved = await RegUser.save()
                console.log(Saved)
                res.send('USER REGISTERED')
            }
        })
    } catch (error) {
        res.send(error)
    }


}
)

app.get('/login', async (req, res) => {
    const { email, pass } = req.body; // HTML "name" property will be set to email
    try {
        const FindUser = await User.find({ email: email }, async (err, docs) => {
            if (err) {
                return err
            }
            else {
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
    console.log(`listening on PORT ${port}`)
})

