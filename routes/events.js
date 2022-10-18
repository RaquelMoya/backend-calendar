/*
    Event Routes
    /api/events
*/

const { validarJWT } = require("../middlewares/validar-jwt");
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { Router } = require("express");
const router = Router();



//Obtener eventos
router.get('/', validarJWT, getEventos);

//Crear un nuevo evento
router.post(
    '/',
    [
        validarJWT,
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').isDate(),
        check('end', 'Fecha de finalizacion es obligatoria').isDate(),
        validarCampos
    ],
    crearEvento
);

//Actualizar evento

router.put('/:id',
    [
        validarJWT,
        // check('title', 'El titulo es obligatorio').not().isEmpty(),
        // check('start', 'Fecha de inicio es obligatoria').isDate(),
        // check('end', 'Fecha de finalizacion es obligatoria').isDate(),
        validarCampos
    ],
    actualizarEvento
);

//Borrar evento
router.delete('/:id', validarJWT, eliminarEvento);

module.exports = router;
