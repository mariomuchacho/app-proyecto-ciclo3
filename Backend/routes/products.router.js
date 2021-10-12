/*El enrutamiento se refiere a cómo los extremos (URI) de una aplicación responden 
a las solicitudes de los clientes.*/

const { Router } = require('express');
const router = Router();
const { body } = require('express-validator');

/*importando el controlador de los productos, encargado de gestionar
la interaccion entre las peticiones HTTP y la base de datos*/
const { productsController } = require('../controllers');

router.get('/:id', productsController.getProduct);

router.get('/', productsController.getProducts);

//escribiendo las reglas que deben cumplir los parametros para crear un producto
router.post('/',
    body('valor', 'El valor del producto es requerido y debe ser numerico').exists().isNumeric(),
    body('descripcion', 'La descripción del producto es requerida').exists(),
    body('estado', 'El estado del producto es requerido(true/false)').isBoolean().exists()
    , productsController.createProduct);

//escribiendo las reglas que deben cumplir los parametros para actualizar un producto               
router.put('/',
    body('valor', 'El valor del producto es requerido y debe ser numerico').exists().isNumeric(),
    body('descripcion', 'La descripción del producto es requerida').exists(),
    body('estado', 'El estado del producto es requerido(true/false)').isBoolean().exists()
    , productsController.updateProduct);

router.delete('/',productsController.deleteProduct);

module.exports = router;