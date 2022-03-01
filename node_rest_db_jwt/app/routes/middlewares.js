const jwt = require("jwt-simple");
const moment = require("moment");

const checkToken = (req, res, next) => {

  if(!req.headers['user-token']) {
    return res.json({error: "necesitas incluir el user token en la cabecera"})
  }

  const userToken = req.headers['user-token'];
  let payLoad = {};

  try {
    payLoad = jwt.decode(userToken, "frase");
  } catch (err) {
      return res.json({error: "el token es incorrecto"});
  }

  if(payLoad.expiredAt < moment().unix()) {
    return res.json({error: "el token ha expirado"})
  }
  
  req.usuarioId = payLoad.usuarioId;

  next();
}

module.exports = {
  checkToken: checkToken
}