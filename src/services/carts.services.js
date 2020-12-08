const cartDao = require("../dao/carts.dao");

class cartService {

  static async create(userId) {
    const lastCart = await cartDao.getLastCartByUser(userId);
    const cart = lastCart[0];

    if (cart && cart.state === 'active') {
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

    if (cart.state != "active" || cart.userId != userId) {
      throw {
        status: "cant_remove",
        msg: "ID de carro inválido o estado Cerrado",
      };
    }

    return cartDao.buyCart(cartId);
  }

  static async list(cartId, userId) {
    const exists = await cartDao.exists(cartId, 'id');
    const cart = exists[0];

    if (!cart) {
      throw {
        status: "cart_not_found",
        msg: "Carro no encontrado",
      };
    }

    if (cart.state != "active" || cart.userId != userId) {
      throw {
        status: "cant_access",
        msg: "ID de carro inválido o estado Cerrado",
      };
    }

    return cartDao.getList(cartId);
  }

  static async addProductToCart(cartId, productId, userId) {
    const exists = await cartDao.exists(cartId, 'id');
    const cart = exists[0];

    console.log(cart);

    if (!cart) {
      throw {
        status: "cart_not_found",
        msg: "Carro no encontrado",
      };
    }

    if (cart.userId != userId) {
      throw {
        status: "cant_access",
        msg: "ID de carro inválido o estado Cerrado",
      };
    }

    const response = await cartDao.getProduct(productId, "id");
    const product = response[0];

    console.log(product);

    if (!product) {
      throw {
        status: "product_not_found",
        msg: "Producto no encontrado",
      };
    }

    if (product.quantity === 0) {
      throw {
        status: "product_without_stock",
        msg: "No hay stock del producto",
      };
    }

    const addedProduct = await cartDao.addProductToCart(cartId, productId);

    const quantity = product.quantity - 1;
    await cartDao.updateProductQuantity(productId, quantity);

    return addedProduct;
  }

  static async removeProductOfCart(cartId, productId, userId) {
    const exists = await cartDao.exists(cartId, 'id');
    const cart = exists[0];

    if (!cart) {
      throw {
        status: "cart_not_found",
        msg: "Carro no encontrado",
      };
    }

    if (cart.userId != userId) {
      throw {
        status: "cant_access",
        msg: "ID de carro inválido o estado Cerrado",
      };
    }

    const response = await cartDao.getProductOfCart(productId);
    const productOfCart = response[0];

    if (!productOfCart) {
      throw {
        status: "product_not_found",
        msg: "Producto no encontrado",
      };
    }

    const removedProduct = await cartDao.removeProductToCart(productOfCart.id);

    /* Si funciona el join, no haria falta get al producto */
    const responseProduct = await cartDao.getProduct(productId, "id");
    const product = responseProduct[0];
    /* Si funciona el join, no haria falta get al producto */

    const quantity = product.quantity + 1;
    await cartDao.updateProductQuantity(productId, quantity);

    return removedProduct;
  }
}

module.exports = cartService;
