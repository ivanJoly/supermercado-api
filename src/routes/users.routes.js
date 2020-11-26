const express = require('express');
const userController= require("../controllers/users.controller")
const authController= require("../controllers/auth.controller")
const router = express.Router();
const authMiddleware= require("../middleware/auth.middleware")
router.post("/login",authController.authenticate)
router.put("/:id",userController.update)
router.get("/:id",authMiddleware,userController.fetchUser)
router.delete("/:id",userController.delete)
router.post("/",userController.signUp)

module.exports=router