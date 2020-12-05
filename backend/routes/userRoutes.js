import express from "express"
import {
    authUser,
    registerUser
   } from "../controllers/userController.js"
// const userController = require("../controllers/userController");

const router = express.Router()

router.post("/", registerUser)
router.post("/login", authUser)

export default router 