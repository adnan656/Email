const express = require('express')
const app = express()
require("./database/database")

const mongoose = require('mongoose')
const Login = require ('./model/login')
const e = require('express')

app.use(express.json());

//1. Create endpoint | name w e route  | save em and pass to database
//use try(success) and catch(error) here:

app.post('/create', async(req,res)=>{
    const user = new Login (req.body)
    try {
        await user.save()
        res.status(201).send("Added to the database")
        console.log("Email and pass added to DB")
    }
    catch (error) {
        res.status(400).send("Error :" + error)
    }
})
// Return all email and pass | sep end point
//use try(success) and catch(error) here 

app.get('/returnboth', async (req,res)=>{
    try {
        const info = await Login.find({})
        res.status(201).send(info)
        console.log("email and pass : " + info)
    }
    catch (error) {
        
    res.status(400).send("Error :" + error)

    }
})

//3. Return a email by ID  | sep end point
//use try(success) and catch(error) here 

app.get("/email/:id", async (req,res)=>{
    const id = req.params.id

    try {
        const email = await Login.findById(id)
        res.status(201).send(email)
        console.log("Info from ID: " + email)

    }
    catch (error) {
        res.status(400).send("Error :" + error)
    }
})

app.listen(8080,()=>{
    console.log("Server has started on 8080")
})