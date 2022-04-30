import express from "express"
import "dotenv/config"
import mongoose from "mongoose"

mongoose.connect(process.env.MONGO_URL, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log("connected to database")
})

const app = express()

app.get("/", (req, res) => {
  res.send("<code>api is working</code>")
})

app.listen(process.env.PORT, () => {
  console.log(`server started at ${process.env.PORT}`)
})
