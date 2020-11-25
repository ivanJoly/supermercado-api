const userDao= require("../dao/users.dao")

class userService {
  static async logIn(){
    
  }
  static async signUp(email, password, userName, firstName, lastName,role) {
   //const result = await userDao.exists(email, 'email');
    //const exists = result[0].exists;

//    if (exists > 0)
  //    throw { status: 409, error: 'email_in_use', msg: 'Email en uso' };
    const user = [email, password, userName, firstName, lastName,role];

    return userDao.signUp(user);
  }

  static async update(id, email, userName, firstName, lastName,role) {
   

    return userDao.update(id, email, userName, firstName, lastName,role);
  }

  static async delete(id) {
   
    return userDao.delete(id);
  }

  static async fetchUser(id) {
    //const exists = await userDao.exists(id, 'id');
    //Esto no se hace aca , se hace en el controller
   // if (exists[0].exists === 0)
   //   throw {
    ////    status: 404,
     //   error: 'user_not_found',
    //    msg: 'Usuario no encontrado'
   //   };

  const user= userDao.fetchUser(id);
  return user
  }
}

module.exports = userService;
