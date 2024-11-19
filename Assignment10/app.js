const express = require('express');
const mongoose = require('mongoose');
const courseRoute = require('./Routes/course.js');

const app = express();
const PORT = 2001;
app.use(express.json());

app.use('/course', courseRoute);


// MongoDB connection and server connection 
mongoose.connect('mongodb://localhost:27017/college').then(() => {
    console.log('Connected to MongoDB');

    app.listen(PORT, (error) => {
        if (error) {
            console.log(`error while connecting to http:localhost:${PORT}: `, error)
        }
        else {
            console.log(`Server is running on http://localhost:${PORT}`);
        }
    })
}).catch((error) => {
    console.log('error while connecting to MongoDB: ', error);
})