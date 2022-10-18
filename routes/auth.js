/*
RUTAS DE USUARIO

host + /api/auth
*/

const express = require('express');
const router = express.Router();
const { crearUsuario, loginUsuario, revalidarToken }= require('../controllers/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');


//rutas


router.get('/renew', validarJWT, revalidarToken);

router.post('/',
 [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser de 6 caracteres').isLength({min: 6}),
    validarCampos
 ], loginUsuario);

router.post('/new', 
[
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser de 6 caracteres').isLength({min: 6}),
    validarCampos

], crearUsuario);


module.exports = router;