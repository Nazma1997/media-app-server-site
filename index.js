const express = require( 'express');
const dotenv = require('dotenv');
const bodyParser = require( 'body-parser');
const  mongoose = require('mongoose');
const  cors = require('cors');
const connectDB = require('./db')
const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
dotenv.config()
app.use(cors());


connectDB( 'mongodb://localhost:27017/social-media-app' || process.env.MONGO_DB)
.then(() => {
  console.log('DataBase is Connected')
  app.listen(5000, () => {
    console.log('Server is Listening on port 5000');
})
})
.catch(error => {
     console.log(error)
})