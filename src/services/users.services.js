const userDao= require("../dao/users.dao")
const {userValidation}= require("../ validation/index")
class userService {
  static async logIn(){
    
  }
  static async signUp(email, password, userName, firstName, lastName,role) {
   //const validation = userValidation({email,password,userName,firstName,lastName,role})
    //console.log(validation,"esto es validation")
   // if(validation!=="Validate") return validation
   const result = await userDao.exists(email, 'email');
   const exists = result[0].exists;
   console.log(exists,"esto es exists")
    if(exists===1) throw {message:"User alredy exists"}

    const userResponse = [email, password, userName, firstName, lastName,role];
   return userDao.signUp(userResponse);
  }

  static async update(id, email, userName, firstName, lastName,role) {
   

    return userDao.update(id, email, userName, firstName, lastName,role);
  }

  static async delete(id) {
   
    return userDao.delete(id);
  }

  static async fetchUser(myValue,search,method) {
    //const exists = await userDao.exists(id, 'id');
    //Esto no se hace aca , se hace en el controller
   // if (exists[0].exists === 0)
   //   throw {
    ////    status: 404,
     //   error: 'user_not_found',
    //    msg: 'Usuario no encontrado'
   //   };
console.log(myValue,search,"esto es ruta")
  const user= await userDao.fetchUser(Number(myValue),search);

  if(method==="loginMethod"){return user}
  else {
    return user
  }


  
  }
}


module.exports = userService;
