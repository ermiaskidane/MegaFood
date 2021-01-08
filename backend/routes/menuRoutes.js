import express from "express"
import {menus, PurchaseImg} from "../data/menus.js"
import { getMenus, getMenusById} from "../controllers/menuController.js"

const router = express.Router()

router.get("/purchase", (req, res) => {
    res.json(PurchaseImg)
})  


router.get("/menus", getMenus)

router.get("/menus/:id", getMenusById)
  
export default router
