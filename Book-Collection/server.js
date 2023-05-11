const express = require('express');
const bodyParser = require("body-parser");
const helmet = require('helmet');
const app= express();


app.use(express.json());
app.use(bodyParser.json());

app.use(express.static(__dirname));

    app.get("/",(req,res)=>{

        res.sendFile(__dirname +"./index.html");
    });

    let books=[];

    app.get("/books",(req,res)=>{


        res.json(books);
    });

    app.post('/books', (req,res) => {

        const {title, author, publishedDate} = req.body;

        const id = Math.floor(Math.random() * 100000);
            
        let data = {id, title, author, publishedDate};

        books.push(data);

        res.send(data);
    
    });

    app.delete("/books/:id",(req,res)=>{

        let id= parseInt(req.params.id);

        const bookIndex = books.findIndex((books) => book.id === id);
        if(bookIndex=== -1){

            res.status(404).send("Book not found");
        }
        else{
            books.splice(bookIndex, 1);
            req.send("Book delete successful");
        }
    });

    

app.listen(3000,()=>{
    console.log("Server Run Success");
})


// This Assignment was too much heard, sir !!


