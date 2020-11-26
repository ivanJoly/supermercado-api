const express = require("express");
const cartController = require("../controllers/carts.controller");
const router = express.Router();

router.post(`/`, cartController.createCart);

router.delete(`/:id`, cartController.removeCart);
router.put(`/:id`, cartController.buyCart);

router.get(`/:id/products`, cartController.showProductList);

router.post(`/:id/products/:idProduct`, cartController.addProduct);
router.delete(`/:id/products/:idProduct`, cartController.removeProduct);


module.exports = router;
