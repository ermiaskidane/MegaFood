import express from "express"
import {bestSellerImg, AllSellers} from "../data/menus.js"

const router = express.Router()

router.get("/bestsellers", (req, res) => {
    res.json(bestSellerImg)
})

router.get("/sellers", (req, res) => {
    res.json(AllSellers)
})

export default router