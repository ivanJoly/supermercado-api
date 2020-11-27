const cartServices = require("../services/carts.services");

class cartsController {
  static async createCart(req, res) {
    /*Get id by user authentication */
    const userId = 1;

    if (
      (userId && typeof userId !== "number")
    ) {
      return res.status(400).send();
    }

    try {
      const result = await cartServices.create(userId);
      return res.status(201).send(result);
    } catch (error) {
      const status = error.status;

      if (status === undefined) return res.status(500).send();
      if (status === "already_exist")
        return res.status(400).send({
          error: status,
          msg: error.msg,
        });

      return res.status(status).send(error);
    }
  }

  static async removeCart(req, res) {
    /*Get id by user authentication */
    const userId = 1;
    // const {cartId} = req.params;
    const cartId = 1;

    if (
      (userId && typeof userId !== "number") ||
      (cartId && typeof cartId !== "number")
    ) {
      return res.status(400).send();
    }

    try {
      await cartServices.remove(cartId, userId);
      return res.status(203).send({ msg: 'Operación exitosa' });
    } catch (error) {
      const status = error.status;
      if (status === undefined) return res.status(500).send();
      if (status === "cant_remove")
        return res.status(400).send({
          error: status,
          msg: error.msg,
        });
      if (status === "cart_not_found")
        return res.status(400).send({
          error: status,
          msg: error.msg,
        });
      return res.status(status).send(error);
    }
  }

  static async buyCart(req, res) {

    /*Get id by user authentication */
    const userId = 1;
    // const {cartId} = req.params;
    const cartId = 1;

    if (
      (userId && typeof userId !== "number") ||
      (cartId && typeof cartId !== "number")
    ) {
      return res.status(400).send();
    }

    try {
      await cartServices.buy(cartId, userId);
      return res.status(203).send({ msg: 'Operación exitosa' });
    } catch (error) {
      const status = error.status;

      if (status === undefined) return res.status(500).send();
      if (status === "cant_remove")
        return res.status(400).send({
          error: status,
          msg: error.msg,
        });
      if (status === "cart_not_found")
        return res.status(400).send({
          error: status,
          msg: error.msg,
        });
      return res.status(status).send(error);
    }
  }

  static async showProductList(req, res) {
    return res.status(200).send({ msg: "test" });
  }

  static async addProduct(req, res) {
    return res.status(200).send({ msg: "test" });
  }

  static async removeProduct(req, res) {
    return res.status(200).send({ msg: "test" });
  }
}

module.exports = cartsController;
