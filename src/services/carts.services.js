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

  static async remove(cartId, userId) {
    const exists = await cartDao.exists(cartId, 'id');
    const cart = exists[0];

    if (!cart) {
      throw {
        status: "cart_not_found",
        msg: "ID de carro inválido o estado Cerrado",
      };
    }

    if (cart.state != "active" || cart.userId != userId) {
      throw {
        status: "cant_remove",
        msg: "ID de carro inválido o estado Cerrado",
      };
    }

    return cartDao.removeCart(cartId);
  }

  static async buy(cartId, userId) {
    const exists = await cartDao.exists(cartId, 'id');
    const cart = exists[0];

    if (!cart) {
      throw {
        status: "cart_not_found",
        msg: "ID de carro inválido o estado Cerrado",
      };
    }

    if (cart.state != "active" && cart.userId != userId) {
      throw {
        status: "cant_remove",
        msg: "ID de carro inválido o estado Cerrado",
      };
    }

    return cartDao.buyCart(cartId);
  }
}

module.exports = cartService;
