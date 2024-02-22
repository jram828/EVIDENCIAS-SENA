/**
* creamos un módulo por eso utilizamos express
*/

const express = require('express');
const router = express.Router();
const clienteCtrl = require('../controllers/cliente.controller');

router.get('/', clienteCtrl.getClientes); // Rutas más limpias (obtener carros)
router.post('/', clienteCtrl.createClientes);//guardar
router.get('/:_id', clienteCtrl.getUnicoCliente);// obtiene un único carro
router.put('/:_id',clienteCtrl.editarCliente); //Actualizar datos (uno a la vez)
router.delete('/:_id', clienteCtrl.eliminarCliente);

module.exports = router;