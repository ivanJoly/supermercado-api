const { query } = require("../repositories/main.repository");

class cartDao {
  static exists(value, field) {
    const sql = `SELECT state AS 'state' FROM Cart WHERE ${field} = ?`;

    return query(sql, value);
  }

  static createCart(userId) {
    const insertCart = `INSERT INTO Cart (userId) values(?)`;

    return query(insertCart, userId);
  }
}

module.exports = cartDao;
