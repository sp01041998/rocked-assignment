const express = require("express")

const app = express()

app.use(express.json())

app.listen(3000, err => {
    if(err){
     return console.log(err)
    }
    console.log("Server is listening on port 3000")
 })
 
 module.exports = {
     app
 }
 