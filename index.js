const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://jaba:jaba123@cluster0.fmrs8.mongodb.net/<dbname>?retryWrites=true&w=majority', 
 {useNewUrlParser:true, useUnifiedTopology: true})
 .then(()=> console.log("DB connected"))
 .catch(err => console.errror(err));


app.get("/",(req, res) => {
    res.send("Hello World");
});




app.listen(5000)
