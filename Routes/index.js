const router = require('express').Router();

const product = require('./productRouter')
const test = require('./testRouter')

router.use('/test', test);
router.use('/products', product)

module.exports = router;