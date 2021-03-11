const mongoose = require("mongoose");
const dotenv = require("dotenv")
const express = require("express")
const Routers = require("../routers/routes")
const cors = require("cors");
const server = express();
dotenv.config()
const PORT = process.env.PORT || 3000
const dbConnector = ()=>{
    mongoose.connect(process.env.DB_ADDRESS,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
    const connection_handler = mongoose.connection
    connection_handler.on('open',()=>{
        server.use(cors())
        server.use('/customer',Routers)
        server.use('/supplier',Routers)
        server.use('/items',Routers)
        server.use('/system',Routers)
        server.listen(PORT)
    })
}

exports.dbConnector = dbConnector