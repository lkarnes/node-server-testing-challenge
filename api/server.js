const express = require("express");

const db = require("./serverModel");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.post("/", (req, res) => {
    db.add(req.body).then(user => {
        res.status(201).json({success: "user added to database"})
    })
    .catch(err =>{
        res.status(500).json({message: "internal server error", error: err})
    })
});

server.delete('/', (req,res)=> {
    db.remove(req.body).then(response => {
        res.status(202).json({message: "user has been deleted"})
    }).catch(err=> {
        res.status(500).json({message: "internal server error", error: err})
    })
})

module.exports = server;
