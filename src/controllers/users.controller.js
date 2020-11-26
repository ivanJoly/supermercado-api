const userService= require("../services/users.services")
class userController {
  static async logIn(req,res){
    
  }
  static async signUp(req, res) {

    const { email, password, userName, firstName, lastName,role } = req.body;

    try {
      const result = await userService.signUp(
        email,
        password,
        userName,
        firstName,
        lastName,
        role
      );

      return res.status(200).send(result);
    } catch (error) {

      return res.status(500).send();

    }
    
  }

  static async update(req, res) {
      


    const { email, userName, firstName, lastName,role } = req.body;
    const { id } = req.params;

    if (
      (email && typeof email !== 'string') ||
      (userName && typeof userName !== 'string') ||
      (firstName && typeof firstName !== 'string') ||
      (lastName && typeof lastName !== 'string')
    ) {
      console.log(
        'Call id: %s error:%s',
        callId,
        'Required parameter is missing or wrong type'
      );
      return res.status(400).send();
    }

    try {
      await userService.update(id, email, userName, firstName, lastName,role);

      return res.status(200).send();
    } catch (error) {


      return res.status(status).send(error);
    }
    
  }

  static async delete(req, res) {
    
    const { id } = req.params;

    try {
      await userService.delete(id);
      return res.status(200).send();
    } catch (error) {

     return res.status(500).send();

    }
    
  }

  static async fetchUser(req, res) {
    const { id } = req.params;

    try {
      const result = await userService.fetchUser(id,"id");
      return res.status(200).send(result);
    } catch (error) {

      return  res.status(500).send();

    } 
  }
 
}

module.exports = userController;