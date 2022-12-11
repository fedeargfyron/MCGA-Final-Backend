const {
    getProducts,
    getById,
    postProduct,
    updateProduct,
    deleteProduct
} = require ('../Controllers/productController');

const authMiddleware = require('../Middlewares/AuthMiddleware');

const router = require('express').Router();

router.get('/', getProducts);

router.get('/byId/:id', authMiddleware, getById);

router.post('/', authMiddleware, postProduct);

router.put('/:id', authMiddleware, updateProduct);

router.delete('/:id', authMiddleware, deleteProduct);

module.exports = router;