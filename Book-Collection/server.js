const express = require('express');
const helmet = require('helmet');
const app= express();

// const router = require("./router");
// app.use(express.json());
// app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname));

app.get("/",(req,res)=>{

    res.sendFile(__dirname +"./index.html");
})



    app.get("/books",(req,res)=>{

        const book=[];

    

        res.json(book);
    })

    app.post("/books",(req,res)=>{

        let bookArray=[

            {
                "id":123456,
                "title":"MERN Book",
                "author":"Rabbil Hasan",
                "publishedDate":"2022-06-08"
            },
            {
                "id":123457,
                "title":"Ostad Book",
                "author":"Mridul Hasan",
                "publishedDate":"2023-09-28"
            },
            {
                "id":123458,
                "title":"Conceptual Book",
                "author":"Faysal Ahmed",
                "publishedDate":"2021-12-18"
            }
            ]
        

        res.json(bookArray);
    })


// app.use("/",router);


app.listen(3000,()=>{
    console.log("Server Run Success");
})