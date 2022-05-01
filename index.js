import express from "express"
import "dotenv/config"
import mongoose from "mongoose"
import addRoutes from "./config/routes.config.js"

mongoose.connect(process.env.MONGO_URL, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log("connected to database")
})

const app = express()

addRoutes(app)

app.listen(process.env.PORT, () => {
  console.log(`server started at ${process.env.PORT}`)
})
