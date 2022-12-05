const router = require('express').Router();

const product = require('./productRouter')
const test = require('./testRouter')
const user = require('./userRouter')

router.use('/test', test);
router.use('/products', product)
router.use('/users', user);

module.exports = router;