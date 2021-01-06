import express from "express"

import { getBestSeller, getAllSeller} from "../controllers/ShopController.js"

const router = express.Router()

router.get("/bestsellers", getBestSeller)


router.get("/sellers", getAllSeller)


export default router