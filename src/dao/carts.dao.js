const { query } = require("../repositories/main.repository");

class cartDao {
  static exists(value, field) {
    const sql = `SELECT state, userId, id FROM Cart WHERE ${field} = ?`;

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
}

module.exports = cartDao;
