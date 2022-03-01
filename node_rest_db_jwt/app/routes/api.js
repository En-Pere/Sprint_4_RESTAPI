const router = require("express").Router();

const middlewares = require('./middlewares');
const jocdedausroutes = require("./jocdedausroutes")
const userroutes = require("./userroutes")

router.use('/jocdedaus', middlewares.checkToken, jocdedausroutes); 
router.use('/users', userroutes); 


module.exports = router;