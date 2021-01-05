import asyncHandler from "express-async-handler"
import BestSeller from "../models/bestSellerModel.js"
import ShopMenu from "../models/ShopMenuModel.js"

// @desc Fetch BestSeller
// @route GET /api/shop/bestsellers
// @access Public
const getBestSeller = asyncHandler(async(req, res) => {
    const bestSell = await BestSeller.find({})

    if(bestSell){
        res.json(bestSell)
    } else {
        res.status(404)
        throw new Error("bestSell not found")
    }
})

// @desc Fetch BestSeller
// @route GET /api/shop/sellers
// @access Public
const getAllSeller = asyncHandler(async(req, res) => {
    const shopMenu = await ShopMenu.find({})

    if(shopMenu){
        res.json(shopMenu)
    } else {
        res.status(404)
        throw new Error("shopMenu not found")
    }
})

 

export  { getBestSeller, getAllSeller}
