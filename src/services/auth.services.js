const userDao= require("../dao/users.dao")
const jwt= require("jsonwebtoken")
const LLAVE_SECRET="llavesecreta"
/*

{
    "message": "Successful login",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImpjIiwiZmlyc3ROYW1lIjoibmFjaGl0byIsImxhc3ROYW1lIjoiY29yIiwicm9sZSI6ImlzQWRtaW4iLCJpYXQiOjE2MDYzOTM1OTMsImV4cCI6MTYwNjM5NzE5M30.yOVLYu-Hf7VkIThtxifZw3YmS6KmAB37vr8hVUb99Qo",
    "user": {
        "userName": "jc",
        "firstName": "nachito",
        "lastName": "cor",
        "role": "isAdmin"
    }
}*/
class authService{
    static async logIn(userName,password){
        const exists= await userDao.exists(userName,'userName')
        const userFetch = await userDao.fetchUser(userName,"userName")
        if(exists[0].exists===0){
            throw{
                message:"Not posible log in"
            }
        }
        //TODO:chequeo que este registrado con ese password - realizar con dao 
        if(password!==userFetch[0].password){
            console.log("Password equivocada")
         
        }
console.log("pase esto ")
        console.log("Username y password correctos")

        const payload= {
            userName:userFetch[0].userName,
            firstName:userFetch[0].firstName,
            lastName: userFetch[0].lastName,
            role:userFetch[0].role
        }
        // LLAVE_SECRETA deberia estar en un archivo de configuracion
        const token= jwt.sign(payload,LLAVE_SECRET,{
            expiresIn:60*60
        })
        console.log(token)
        
        return{

            message:"Successful login",
            token:token,
            user:payload
        }



    }


}

module.exports=authService