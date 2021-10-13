const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const validator = require("validator")
const port = process.env.PORT || 8080;
const https = require("https")
const cors = require("cors")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(cors())

mongoose.connect('mongodb://localhost:27017/task10',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

const userSchema = new mongoose.Schema(
    {
        _id: String,
        
        address: {
            type: String,
            required: true,
            unique: true,
            minlength: [2, "minimum 2 letters"],
            maxlength: 30
        },
        date: {type: String,
        },
        title: {type: String,
            minlength: [2, "minimum 2 letters"],
            maxlength: 30
        },

        description: {
            type: String,
            
            minlength: [2, "minimum 2 letters"],
            maxlength: 200
        },
        
        amount:{type: Number
        }
    }
)

const User = new mongoose.model("User", userSchema)


db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.use(express.json());
app.post("/sign_up",(req,res)=>{

    
    var sub = req.body.sub;
    var address = req.body.address;
    var date = req.body.date;
    var title = req.body.title;
    var description = req.body.description;
    var amount = req.body.amount;
    

    var data = {
        "sub": sub,
        "address": address,
        "date" : date,
        "title": title,
        "description": description,
        "amount": amount
    }
    

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('signup_success.html')

})



//To fetch data 
app.get("/", (req, res)=>{
        const getUser = {
            address: "burwood",
            amount: "30$"

        }
        res.send(getUser)
} )

app.listen(port, ()=>{
    console.log(`Listening on PORT ${port}`)
})



