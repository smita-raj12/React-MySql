const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const cors = require("cors");
const mysql = require("mysql");


const db= mysql.createPool({
    host: "localhost",
    user:"root",
    password:"epicodus",
    database: "curddatabase"
});

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors());
app.use(express.json());

const  PORT = 3001;

app.get('/api/get', (req, res)=> {
    const sqlGet = "SELECT * FROM movies_reviews";
    db.query(sqlGet, (err, result)=>{
        res.send(result);
    })
    
});


app.post("/api/create", (req, res)=>{
    const movieName = req.body.movieName
    const movieReview = req.body.movieReview

    const sqlInsert = "INSERT INTO movies_reviews (movieName, movieReview) VALUES (?,?);"
    
    console.log(sqlInsert)
    db.query(sqlInsert, [movieName, movieReview], (err, result)=>{
    console.log(err);
    }); 
});


app.listen(PORT,() => {
    console.log(`running on port ${PORT}`);
});

