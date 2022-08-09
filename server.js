`use strict`;

const express = require('express')
require('dotenv').config();
const cors = require('cors')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3001

const app = express();
app.use(cors());

// routes.
app.get('/' , handlehome );
app.get('/books' , handlegetbook )




// my function.
function handlehome (req , res){
res.send("hi man")
}

function handlegetbook(req , res){
    bookmodel.find({},(error , data) =>{
        if(error)console.log('error tje data not find')
        else res.send(data);
    })
}

mongoose.connect('mongodb://localhost:27017/books')

const bookschema =  mongoose.Schema({
    title : String,
    description :String,
    status : Boolean,
    img_url : String
})


const bookmodel = mongoose.model('bookmodel' , bookschema)


const book1 = new bookmodel({
    title : "Verity Paperback",
    description : "Whose truth is the lie? Stay up all night reading the sensational psychological thriller that has readers obsessed, from the #1 New York Times bestselling author of It Ends With Us.",
    status : true,
    img_url : "https://images-na.ssl-images-amazon.com/images/I/41d1gVUK1yL._SX331_BO1,204,203,200_.jpg"

})

const book2 = new bookmodel({
    title : "Trump in the White House",
    description : "The bestselling authors of The Man Who Ran Washington argue that Trump was not just lurching from one controversy to another",
    status : false,
    img_url : "https://images-na.ssl-images-amazon.com/images/I/41C+OjN2AmL._SX327_BO1,204,203,200_.jpg"

})

const book3 = new bookmodel({
    title : "Where the Crawdads Sing",
    description : "For years, rumors of the “Marsh Girl” have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969,",
    status : true,
    img_url : "https://images-na.ssl-images-amazon.com/images/I/51k-fjlkb8L._SX331_BO1,204,203,200_.jpg"

})

book1.save();
book2.save();
book3.save();

app.listen(PORT ,() =>{
    console.log(`My port is : ${PORT}`);
})