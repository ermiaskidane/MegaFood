import express from "express"
import dotenv from "dotenv"
import colors from "colors"
 
// const menus = require("./data/menus") 
import {menus, PurchaseImg, bestSellerImg, AllSellers,featurePost,featureInstagram, featureArticles} from "./data/menus.js"
// const connectDB = require("./config/db")
// const userRouters = require("./routes/userRoutes")
import connectDB from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"

dotenv.config()

connectDB()

const app = express();

app.use(express.json())
 
app.get("/", (req, res) => {
  res.send("Welcome to backend...")
})
 
app.get("/api/purchase", (req, res) => {
  res.json(PurchaseImg)
})

app.get("/api/menus", (req, res) => {
  res.json(menus)
})

app.get("/api/menus/:id", (req, res) => {
  const menu = menus.find((m) => m._id ===req.params.id)

  res.json(menu)
})

app.get("/api/shops/sellers", (req, res) => {
  res.json(AllSellers)
})

app.get("/api/shop/bestsellers", (req, res) => {
  res.json(bestSellerImg)
})

app.get("/api/feature/post", (req, res) => {
  res.json(featurePost)
})

app.use("/api/users", userRoutes)

// // Custom Error Handler for Routes does not exist
// app.use(notFound);

app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
})

// // Custom Error handler
// app.use(errorHandler);

app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode port ${PORT}`));
