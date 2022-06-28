const express = require('express')
const cors = require('cors')
const connectDB = require('../backend/db')
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
const { notFound, errorHandler } = require('../backend/middleware/errorMiddleware')

const app = express()
app.use(express.json())
app.use(cors())
require("dotenv").config({ path: 'backend/config.env' })
connectDB()

app.use('/api/user', userRoutes)
app.use('/api/chat', chatRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(process.env.PORT, console.log("running", process.env.PORT))