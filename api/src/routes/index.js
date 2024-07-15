const {Router} = require('express')
const router = Router();
const userController = require('../controller/UsuariosController');


router.post('/SignIn', userController.SignIn);
router.post('/SignUp', userController.SignUp);


module.exports = router;