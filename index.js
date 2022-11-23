const express = require( 'express');
const dotenv = require('dotenv');
const bodyParser = require( 'body-parser');
const  mongoose = require('mongoose');

const  cors = require('cors');
const connectDB = require('./db')
const app = express();


const routes = require('./routes/index');
const PORT = process.env.PORT || 4000

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
dotenv.config()
app.use(cors());

//routes
app.use(routes)


//  'mongodb://localhost:27017/social-media-app' ||

connectDB( process.env.MONGO_DB)
.then(() => {
  console.log('DataBase is Connected')
  app.listen(PORT, () => {
    console.log(`Server is listing on port ${PORT}`)
})
})
.catch(error => {
     console.log(error);
})