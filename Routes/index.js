const router = require('express').Router();
const test = require('./testRouter')

router.use('/test', test);

module.exports = router;