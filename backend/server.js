import express from "express"
import dotenv from "dotenv"
import colors from "colors"
 
import {menus} from "./data/menus.js"
import connectDB from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"
import menuRoutes from "./routes/menuRoutes.js"
import shopRoutes from "./routes/shopRoutes.js"
import featureRoutes from "./routes/featureRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import articleRoutes from "./routes/articleRoutes.js"

dotenv.config()

connectDB()

const app = express();

app.use(express.json())
 
app.get("/", (req, res) => {
  res.send("Welcome to backend...")
})
 
app.use("/api/homeScreen", menuRoutes)

app.use("/api/shop", shopRoutes)

app.use("/api/feature", featureRoutes)

app.use("/api/users", userRoutes)

app.use("/api/orders", orderRoutes)

app.use("/api/articles", articleRoutes)

app.get("/api/config/paypal", (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))

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

const PORT = process.env.PORT || 5001
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode port ${PORT}`));
