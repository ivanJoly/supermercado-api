const userValidation = ({userName,password,firstName,lastName,role,email})=>{
    let error =false
    if (
        !email.includes("@")  ||
        typeof userName !== 'string' ||
        typeof firstName !== 'string' ||
        typeof lastName !== 'string'||
        typeof role !=="string"
      ) error=true

      if(error) throw {"message":"Uno de tus campos no corresponde con lo que se pide..."}

      return "Validate"
}





module.exports={
    userValidation
}