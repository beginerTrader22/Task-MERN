const express = require('express');
const dotenv = require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();


//Gets data from front end thorugh the request and sends it back via resposne
app.use('/api/tasks' , require('./routes/taskRoute.js'))

app.listen(port, ()=> console.log(`server is listening on ${port}`));






console.log("server is running ")