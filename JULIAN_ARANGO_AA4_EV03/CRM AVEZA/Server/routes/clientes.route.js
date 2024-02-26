const express = require('express');
const router = express.Router();
const clienteCtrl = require('../controllers/cliente.controller');
const getCliente = require('../controllers/getCliente');
const login = require('../controllers/login')

router.get('/contrato', getCliente);
router.get("/login", login);
router.post('/', clienteCtrl.createClientes);//guardar
router.get('/:id', clienteCtrl.getUnicoCliente);// obtiene un único carro
router.put('/:id',clienteCtrl.editarCliente); //Actualizar datos (uno a la vez)
router.delete('/:id', clienteCtrl.eliminarCliente);

module.exports = router;