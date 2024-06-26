const express = require("express")
const dbConnect = require("./config/dbConnect")
const app = express()
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 4000
const authRouter = require('./routes/authRoute')
const bodyParser = require("body-parser")
const { notFound, errorHandler } = require("./middlewares/errorHandler")
const productRouter = require('./routes/productRoute')
const cookieParser = require('cookie-parser')
const morgan = require("morgan")

dbConnect()

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/user', authRouter)
app.use('/api/product', productRouter)

app.use(notFound)
// app.use(cookieParser())
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server  is running on port ${PORT}`)
})

//3:37