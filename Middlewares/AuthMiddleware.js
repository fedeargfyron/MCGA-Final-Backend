const User = require('../Models/userSchema');
const jwt = require('jsonwebtoken');

const checkAuth = async (req, res, next) => {
    try{
        const { authorization } = req.headers;
        const decoded = await jwt.verify(authorization, process.env.JWT_KEY);
        const user = await User.findById(decoded.userId);

        if(authorization !== user.token){
            throw new Error('Invalid token');
        }

        if (Date.now() >= decoded.exp * 1000) {
            throw new Error('Expired token');
        }

        next();
    } catch (err) {
        res.status(401).json({
            Message: 'Unauthorized',
            Success: false,
            data: err
        })
    }
}


module.exports = checkAuth;