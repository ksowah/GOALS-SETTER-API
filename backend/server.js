const express = require("express")
const colors = require("colors")
const app = express()
const {errorHundler} = require("./middlewear/errorMiddlewear")
const connectDB = require("./config/db")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 8000


connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/api/goals", require("./routes/goalRouts"))
app.use(errorHundler)


app.listen(PORT, () => console.log(`server running on prot ${PORT}...`))