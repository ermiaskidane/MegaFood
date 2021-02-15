import express from "express"
import {
    getArticle,
    postArticle,
    editArticle,
    updateArticle,
    deleteArticle
   } from "../controllers/articleController.js"

const router = express.Router()

router.get("/all", getArticle)

router.post("/", postArticle)

router.get("/edit/:id", editArticle)

router.put("/:id", updateArticle)

router.delete("/:id", deleteArticle)


export default router
