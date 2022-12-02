const {
    getProducts,
    getById,
    postProduct,
    updateProduct,
    deleteProduct
} = require ('../Controllers/productController');

const router = require('express').Router();

router.get('/', getProducts);

router.get('/byId/:id', getById);

router.post('/', postProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

module.exports = router;