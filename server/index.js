const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const cors = require("cors");
const mysql = require("mysql");


const db= mysql.createConnection({
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

app.delete("/api/delete/:movieName", (req, res) =>{
    const name =req.params.movieName;
    const sqlDelete = "DELETE FROM movies_reviews WHERE movieName = ?";

    db.query(sqlDelete, name, (err, result)=>{
        if(err) console.log(err);
    })
})

app.put("/api/update", (req, res)=>{
    const name= req.body.movieName;
    const review = req.body.movieReview;
    const sqlUpdate = "UPDATE movies_reviews SET movieReview = ? WHERE movieName = ?";

    db.query(sqlUpdate, [review, name], (err, result)=>{
        if(err) console.log(err);
    })
})

app.post("/api/register", (req, res)=>{
    const userName = req.body.userName;
    const password = req.body.password;

    const sqlReg = "INSERT INTO users (userName, password) VALUES (?,?);"
    
    db.query(sqlReg, [userName, password], (err, result)=>{
    console.log(err);
    }); 
});

app.post("/api/login", (req, res)=>{
    const userName = req.body.userName;
    const password = req.body.password;

    const sqlLog = "SELECT * FROM users WHERE userName = ? AND password =?;"
    
    db.query(sqlLog, [userName, password], (err, result)=>{
        if(err){
            res.send({err :err})
        }
        if(result > 0){
            res.send(result);
        }else{
            res.send({messege: "wrong combation"});
        }
    }); 
});


app.listen(PORT,() => {
    console.log(`running on port ${PORT}`);
});


