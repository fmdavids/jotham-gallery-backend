const path = require("path")
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const uploadRoute = require("./src/router/uploadRoute")
const dotenv = require("dotenv");
const fs = require("fs");
const Photo = require("./src/models/imageSchema");
const upload = require("./src/utils/upload");
const cloudinary = require("./src/utils/cloudinary");



const app = express()
dotenv.config()
const connectDB = (connectionString) => {
    mongoose.connect(connectionString)
    console.log("DB is connected")
}
connectDB(process.env.DB_CONNECTION)

app.use(express.json())
app.use(cors());

const PORT  = process.env.PORT || 3030;

app.use(`/api`, uploadRoute)



// app.use(express.static(path.join(__dirname, '../client/build')))

// app.get('*', (req,res) => {
//     res.sendFile(
//         path.resolve(__dirname, '../', 'client', 'build', 'index.html')
//     )
// })


app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});






app.listen(PORT, () =>{
    console.log("Server is up and running")
})