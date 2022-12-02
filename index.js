require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./Routes');
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use(express.json());
app.use('/', router);


const url = process.env.DBURL;
mongoose.connect(url)
    .then(() => console.log("Database connection: OK"))
    .catch(() => console.log("Error connecting database"));
    