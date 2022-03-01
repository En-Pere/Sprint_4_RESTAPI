const { User } = require("../config/dbconfig");
const bcrypt = require("bcryptjs");
const moment = require("moment");
const jwt = require("jwt-simple");


//register
register = (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  const encryptedPass = req.body.password;
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: encryptedPass
  }
  User.create(user)
      .then(data => {
      res.send(data);
     })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || 'ha ocurrido un error'
      })
    })
};


//find all users
findAllusers = (req, res) => {
  User.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving names."
      });
    });  
};

login = (req, res) => {
  const mail = req.body.email;
  const user = req.body.username;
  //const pass = req.body.password
  
  User.findOne({
    where: {email: mail, username: user}
  })
  .then(data => {
    if(data){
      const checkPass = bcrypt.compareSync(req.body.password, data.password)
        if(checkPass) {
          res.json({message: createToken(data)});
        } else {
          res.json({message: "error password"});
        }
    } else {
      res.send({error: "error usuario o contraseña"})
    }
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving names."
    });
  });  
}

const createToken = (user) => {
  const payLoad = {
    usuarioId: user.id,
    createdAt: moment().unix(),
    expiredAt: moment().add(5, 'minutes').unix()
  }
  return jwt.encode(payLoad, "frase")
};



module.exports = {
  register,
  findAllusers,
  login
};

