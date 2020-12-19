import express from "express"
import {featurePost,featureInstagram, featureArticles} from "../data/menus.js"

const router = express.Router()

router.get("/post", (req, res) => {
    res.json(featurePost)
})

router.get("/instag", (req, res) => {
    res.json(featureInstagram)
})

router.get("/articles", (req, res) => {
    res.json(featureArticles)
})

export default router