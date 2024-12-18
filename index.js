require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const {configEnv} = require('./src/helper/config')
const userRoutes = require('./src/routes/user')
const qrRoute = require('./src/routes/qr')
const cors = require('cors');

const app = express();

app.use(cors({origin:"*"}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.options('*', cors());

const {DATABASE, BASE_URI, PORT} = configEnv(process.env);

mongoose.connect(DATABASE)
.then(res => console.log('Connected to Database'))
.catch(err => console.log(err));

app.use('/user', userRoutes);
app.use('/qr', qrRoute)

app.get("/", (req, res) => {
    res.send("Welcome to Algoritmia Endpoint!")
})

app.listen(PORT || 3001, () => {
    console.log('Connected to Server');
});