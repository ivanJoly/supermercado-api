const express = require("express");
const userController = require("../controllers/users.controller");
const authController = require("../controllers/auth.controller");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const acl = require("express-acl");

acl.config({ baseUrl: "/", path: "src" });

router.post("/login", acl.authorize, authController.authenticate);
router.put("/:id", acl.authorize, userController.update);
router.get(
  "/:id",
  authMiddleware.validateAuthentication,
  userController.fetchUser
);
router.delete("/:id", acl.authorize, userController.delete);
router.post("/", userController.signUp);

module.exports = router;
