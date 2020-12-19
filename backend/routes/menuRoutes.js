import express from "express"
import {menus, PurchaseImg} from "../data/menus.js"

const router = express.Router()

router.get("/purchase", (req, res) => {
    res.json(PurchaseImg)
})

router.get("/menus", (req, res) => {
    res.json(menus)
})
  
export default router