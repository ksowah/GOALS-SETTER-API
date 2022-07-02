const express = require("express")
const app = express()
const {errorHundler} = require("./middlewear/errorMiddlewear")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/api/goals", require("./routes/goalRouts"))
app.use(errorHundler)


app.listen(PORT, () => console.log(`server running on prot ${PORT}...`))