import express from "express"
import {menus, PurchaseImg} from "../data/menus.js"

const router = express.Router()

router.get("/purchase", (req, res) => {
    res.json(PurchaseImg)
}) 

router.get("/menus", (req, res) => {
    res.json(menus)
})

router.get("/menus/:id", (req, res) => {
    const menu = menus.find((m) => m._id === req.params.id)
  
    res.json(menu)
})

// app.get("/api/menus/:id", (req, res) => {
//     const menu = menus.find((m) => m._id ===req.params.id)
  
//     res.json(menu)
//   })
  
export default router
