
const router= require("express").Router();

const userRoutes= require("./users.routes");
const cartRoutes = require("./carts.routes");

router.use(`/users`,userRoutes)
router.use(`/carts`, cartRoutes);

module.exports = router;
