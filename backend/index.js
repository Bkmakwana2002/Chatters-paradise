const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('../backend/db')

const app = express()
require("dotenv").config({ path: 'backend/config.env' })
connectDB()

app.listen(process.env.PORT, console.log("running", process.env.PORT))