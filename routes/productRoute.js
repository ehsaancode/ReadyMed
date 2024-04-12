const express = require("express")
const { createProduct, getaProduct, getAllProduct, updateProduct, deteleProduct } = require("../controller/productCtrl")

const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware")

const router = express.Router()
router.post("/", authMiddleware, isAdmin, createProduct)
router.get("/:id", getaProduct)
router.put("/:id", authMiddleware, isAdmin, updateProduct)
router.delete("/:id", authMiddleware, isAdmin, deteleProduct)
router.get("/", getAllProduct)


module.exports = router