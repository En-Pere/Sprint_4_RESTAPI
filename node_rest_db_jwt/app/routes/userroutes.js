const router = require('express').Router();
const userControllers = require("../controllers/usercontroller");


router.post('/register', userControllers.register)
router.get('/register', userControllers.findAllusers)

router.post('/login', userControllers.login);





module.exports = router;
