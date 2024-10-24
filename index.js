require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const {configEnv} = require('./src/helper/config')
const userRoutes = require('./src/routes/user')
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({origin:"*"}))

const {DATABASE, BASE_URI, PORT} = configEnv(process.env);

mongoose.connect(DATABASE)
.then(res => console.log('Connected to Database'))
.catch(err => console.log(err));

app.use('/user', userRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to Algoritmia Endpoint!")
})

app.listen(PORT || 3001, () => {
    console.log('Connected to Server');
});