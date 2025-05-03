const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./connect/database.js')
const port = process.env.PORT || 5000;
const {errorHandler} =require('./middleware/errorMidleware.js')

const app = express();


//Gets data from front end thorugh the request and sends it back via resposne
app.use('/api/tasks' , require('./routes/taskRoute.js'))

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(errorHandler)

connectDB();

app.listen(port, ()=> console.log(`server is listening on ${port}`));






console.log("server is running ")