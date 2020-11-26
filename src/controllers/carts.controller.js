const cartServices = require("../services/carts.services");

class cartsController {
  static async createCart(req, res) {
    /*Get id by user authentication */
    let userId = 1;

    try {
      const result = await cartServices.create(userId);
      return res.status(201).send(result);
    } catch (error) {
      const status = error.status;

      if (status === undefined) return res.status(500).send();
      if (status === "already_exist")
        return res.status(400).send({
          error: status,
          msg: "Ya existe un carro activo para ese comprador",
        });

      return res.status(status).send(error);
    }
  }

  static async removeCart(req, res) {
    return res.status(200).send({ msg: "test" });
  }

  static async buyCart(req, res) {
    return res.status(200).send({ msg: "test" });
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
