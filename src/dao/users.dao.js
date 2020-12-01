const { query } = require('../repositories/main.repository');

class userDao {
  static logIn(user){
   const queryFecthUser= `SELECT userName,password FROM User WHERE userName=?,password=?`
   return query(queryFecthUser,user)
    
  }
  static signUp(user) {
    const insertUserQuery = `INSERT INTO User (email, password,
        userName, firstName, lastName,role) 
        values (?, ?, ?, ?, ?,?)`;

    return query(insertUserQuery, user);
  }

  static exists(value, field) {
    const sql = `SELECT COUNT(*) AS 'exists' FROM User WHERE ${field} = ?`;

    return query(sql, value);
  }

  static fetchUser(value,field) {
    const sql = `SELECT email, firstName, userName, password,role, lastName, createdAt FROM User WHERE ${field} = ?`;

    return query(sql, value);
  }

  static delete(id) {
    const sql = `DELETE FROM User WHERE id = ?`;

    return query(sql, id);
  }

  static update(id, email, userName, firstName, lastName,role) {
    let filters = '';
    const queryParams = [];
    let fields = 0;

    if (email) {
      filters += `email = ?`;
      queryParams.push(email);

      fields++;
    }

    if (userName) {
      if (fields > 0) filters += `,`;

      filters += `userName = ?`;
      queryParams.push(userName);

      fields++;
    }
    if (firstName) {
      if (fields > 0) filters += `,`;

      filters += `firstName = ?`;
      queryParams.push(firstName);

      fields++;
    }

    if (lastName) {
      if (fields > 0) filters += `,`;

      filters += `lastName = ?`;
      queryParams.push(lastName);

      fields++;
    }
    if (role) {
        if (fields > 0) filters += `,`;
  
        filters += `role = ?`;
        queryParams.push(role);
  
        fields++;
      }

    let sql = `UPDATE User SET ${filters} WHERE id = ?`;

    queryParams.push(id);

    return query(sql, queryParams);
  }
}

module.exports = userDao;
