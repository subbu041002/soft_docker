const os = require('os');
const express = require('express');
const mysql = require('mysql2');

const app = express();
const hostname = os.hostname();

app.get('/', (req, res) => {
    res.send("Hello World, I am deployed from GH actions and Digital Ocean.");
})

app.get('/home', (req, res) => {
    res.send(`Hostname is ${hostname}`);
})

app.listen(3000,() =>{
    console.log("server is running on port 3000");
});