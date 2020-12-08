const { query } = require("../repositories/main.repository");

class cartDao {
  static exists(value, field) {
    const sql = `SELECT state, userId, id FROM Cart WHERE ${field} = ?`;

    return query(sql, value);
  }

  static getLastCartByUser(value, field) {
    const sql = `SELECT state, userId, id, createdAt FROM Cart WHERE userId = ? ORDER BY createdAt DESC LIMIT 1`;

    return query(sql, value);
  }

  static createCart(userId) {
    const insertCart = `INSERT INTO Cart (userId) values(?)`;

    return query(insertCart, userId);
  }

  static removeCart(cartId) {
    const sql = `DELETE FROM Cart WHERE id = ?`;

    return query(sql, cartId);
  }

  static buyCart(id) {
    let filters = "";
    let fields = 0;
    const queryParams = [];
    const state = 'closed';

    if (state) {
      filters += `state = ?`;
      queryParams.push(state);

      fields++;
    }

    let sql = `UPDATE Cart SET ${filters} WHERE id = ?`;
    queryParams.push(id);

    return query(sql, queryParams);
  }

  /* CartProducts ? */

  static addProductToCart(cartId, productId) {
    const product = [cartId, productId];
    const insertCart = `INSERT INTO CartProducts (cartId, productId) values(?,?)`;

    return query(insertCart, product);
  }

  static removeProductToCart(id) {
    const sql = `DELETE FROM CartProducts WHERE id = ?`;

    return query(sql, id);
  }

  static getList(cartId) {
    const sql = `SELECT productId FROM CartProducts WHERE cartId = ?`;

    return query(sql, cartId);
  }

  static getProductOfCart(productId) {
    const sql = `SELECT * FROM CartProducts WHERE productId = ? LIMIT 1`;

    return query(sql, productId);
  }

  /* Product dao? */

  static getProduct(productId) {
    const sql = `SELECT * FROM Product WHERE id = ?`;

    return query(sql, productId);
  }

  static updateProductQuantity(id, quantity) {
    const queryParams = [];
    let sql = `UPDATE Product SET quantity = ? WHERE id = ?`;
    queryParams.push(quantity);
    queryParams.push(id);

    return query(sql, queryParams);
  }
}

module.exports = cartDao;
