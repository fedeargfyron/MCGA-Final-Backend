const {
    getStatus
} = require ('../Controllers/testController')

const router = require('express').Router();

router.get('/', (req, res) => {
    res.send(getStatus());
});

module.exports = router;