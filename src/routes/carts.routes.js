const express = require("express");
const cartController = require("../controllers/carts.controller");
const router = express.Router();

router.post(`/`, cartController.createCart);

router.delete(`/:cartId`, cartController.removeCart);
router.put(`/:cartId`, cartController.buyCart);

router.get(`/:cartId/products`, cartController.showProductList);

router.post(`/:cartId/products/:productId`, cartController.addProduct);
router.delete(`/:cartId/products/:productId`, cartController.removeProduct);


module.exports = router;
