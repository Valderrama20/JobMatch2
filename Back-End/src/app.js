const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const router = require('./routes');
const errorHandler = require('./utils/errorHandler');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use(helmet({
    crossOriginResourcePolicy: false,
}));

app.use('/api/v1',router);

app.use(errorHandler)

app.get('/', (req, res) => {
    return res.send("Welcome to Jobamatch");
})



module.exports = app;
