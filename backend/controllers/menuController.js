import asyncHandler from "express-async-handler"
import Menu from "../models/menusModel.js"

// @desc Fetch all Menus
// @route POST /api/homescreen/menus
// @access Public
const getMenus = asyncHandler(async(req, res) => {
    const menus = await Menu.find({})

    if(menus){
        res.json(menus)
    } else {
        res.status(404)
        throw new Error("menus not found")
    }
})

// @desc    Fetch single product
// @route   GET /api/homeScreen/menus/:id
// @access  Public
const getMenusById = asyncHandler(async(req, res) => {
    const menu = await Menu.findById((req.params.id))

    if(menu){
        res.json(menu)
    } else {
        res.status(404)
        throw new Error("menus not found")
    }
})

 

export  { getMenus, getMenusById}
