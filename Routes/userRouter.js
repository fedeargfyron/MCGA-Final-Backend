const {
    getById,
    loginUser
} = require ('../Controllers/userController');

const authMiddleware = require('../Middlewares/AuthMiddleware');

const router = require('express').Router();

router.post('/login', loginUser);

router.get('/byId/:id', authMiddleware ,getById);

module.exports = router;