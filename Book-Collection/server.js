const express = require('express');
const bodyParser = require("body-parser");
const helmet = require('helmet');
const app= express();


app.use(express.json());
app.use(bodyParser.json());

app.use(express.static(__dirname));

    app.get("/",(req,res)=>{

        res.sendFile(__dirname +"./index.html");
    })

    let books=[];

    app.get("/books",(req,res)=>{


        res.json(books);
    });

    app.post('/books', (req,res) => {

        const {title, author, publishedDate} = req.body;

        const id = Math.floor(Math.random() * 100000);
            
        const data = {id, title, author, publishedDate};

        books.push(data)

        res.send(data)
    
    });





app.listen(3000,()=>{
    console.log("Server Run Success");
})





