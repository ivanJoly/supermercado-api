const jwt = require("jsonwebtoken");
exports.validateAuthentication = (req, res, next) => {
  if (!req.headers.authorization)
    return res.status(401).send("Authorization header missing");
  const token = req.headers.authorization.split(" ")[1];

  if (!token) return res.status(401).send("Authorization token missing");

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).send("Invalid Token");
    req.decoded = decoded; //Estos son los datos decodificados del token
    next();
  });
};
