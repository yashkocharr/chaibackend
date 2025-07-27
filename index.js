require('dotenv').config()

const express = require('express') 
//we can also write -> import express from 'express'

//creating a server
const app = express()

//creating a port
const port = 5000

//creating a route
app.get('/', (req, res) => {
  res.send('Hello World! YoYo')
})

app.get('/twitter', (req,res) => {
  res.send("Hi this is twitter page")
})

app.get("/login", (req,res) => {
  res.send("login here.")
})

//starting the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
