if(process.env.NODE_ENV){
    require ('dotenv').config({
        path : `.env.${process.env.NODE_ENV}`
    })
}else require ('dotenv').config()

require("./expressServer")

const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI).then(res => {
    console.log("Mongodb running on port 27017")
}).catch(err => {
    console.log(err)
})