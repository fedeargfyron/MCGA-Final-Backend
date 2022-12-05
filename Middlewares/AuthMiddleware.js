const User = require('../Models/userSchema');
const jwt = require('jsonwebtoken');

const checkAuth = async (req, res, next) => {
    try{
        const { token } = req.headers;
        const decoded = await jwt.verify(token, process.env.JWT_KEY);
        const user = await User.findById(decoded.userId);
        if(token !== user.token){
            throw new Error('Invalid token');
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