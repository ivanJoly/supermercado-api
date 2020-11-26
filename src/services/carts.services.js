const cartDao = require("../dao/carts.dao");

class cartService {
  static async create(userId) {
    const exists = await cartDao.exists(userId, "userId");
    const state = exists[0] ? exists[0].state : null;
    /* Last cart (?) */

    if (state === "active") {
      throw {
        status: "already_exist",
        msg: "Ya existe un carro activo para ese usuario",
      };
    }

    return cartDao.createCart(userId);
  }
}

module.exports = cartService;
