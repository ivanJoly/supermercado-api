const express = require('express');
const userController= require("../controllers/users.controller")
const router = express.Router();

router.put("/:id",userController.update)
router.get("/:id",userController.fetchUser)
router.delete("/:id",userController.delete)
router.post("/",userController.signUp)

module.exports=router