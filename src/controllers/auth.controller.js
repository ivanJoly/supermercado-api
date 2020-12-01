const authService= require("../services/auth.services")
class authController {

static async authenticate(req, res) {
       const {  password, userName } = req.body;

    if (
      typeof password !== 'string' ||
      typeof userName !== 'string' 
    ) {
      console.log(
        'Call id: %s error:%s',
        callId,
        'Required parameter is missing or wrong type'
      );
      return res.status(400).send();
    }

    try {
      const result = await authService.logIn(
        userName,
        password,
      );

      return res.status(200).send(result);
    } catch (error) {
return res.status(500).send();

    }
  }

}


module.exports= authController