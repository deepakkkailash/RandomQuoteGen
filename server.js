    let express = require("express");
    let bodyParser = require("body-parser");
    let path = require("path");
    let app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(express.static(path.join(__dirname, '/public')));
    app.get("/",(req,res)=>{
        res.sendFile("/Users/deepakkailash/Desktop/WebDev/RandomQuoteGen/index.html");
    })
    app.get("/Generator",(req,res)=>{
        console.log(req);
        res.sendFile("/Users/deepakkailash/Desktop/WebDev/RandomQuoteGen/Generator.html");
    })
    app.listen(8888,()=>{
        console.log("Listening on 8888")
    });