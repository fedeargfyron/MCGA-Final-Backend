require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

//const { initializeApp } = require("firebase/app");
const router = require('./Routes');
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use(express.json());
app.use(cors());
app.use('/', router);

/*
const firebaseConfig = {
    apiKey: "AIzaSyAzjxadyXBGxBf615tyq_JJmt0YDSGlzBw",
    authDomain: "final-mcga-f15d8.firebaseapp.com",
    projectId: "final-mcga-f15d8",
    storageBucket: "final-mcga-f15d8.appspot.com",
    messagingSenderId: "80320241715",
    appId: "1:80320241715:web:fafa23803a24ad69e08346",
    measurementId: "G-DNTHNX8N0M"
  };

const a = initializeApp(firebaseConfig);
*/

const url = process.env.DBURL;
mongoose.connect(url)
    .then(() => console.log("Database connection: OK"))
    .catch(() => console.log("Error connecting database"));
    