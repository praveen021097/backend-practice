const express =  require("express");
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const connect =()=>{
    return mongoose.connect("mongodb+srv://praveen:pra7523@cluster0.dcsiwe8.mongodb.net/?retryWrites=true&w=majority")
}

const app = express();

app.get("/user",(req,res)=>{
    res.send("hi how are you");
})
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    connect();
        console.log(`listening port ${PORT}`)
})