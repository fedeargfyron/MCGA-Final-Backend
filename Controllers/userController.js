const User = require('../Models/userSchema');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
    try{
        let email = req.body.email;
        let user = await User.findOne({
            email: email,
            password: req.body.pass
        });
        if(!user)
            throw new Error("Invalid user");

        const token = jwt.sign({
            email: email,
            userId: user._id
        },
        process.env.JWT_KEY,
        {
            expiresIn: '1d'
        });
        const updatedUser = await User.findOneAndUpdate(
            { email: email },
            { token },
            { new: true }
        );
        res.status(200).json({
            Message: 'User logged',
            Success: true,
            data: {
                email: updatedUser.email,
                token: updatedUser.token,
                id: updatedUser._id
            }
        })
    }
    catch (err){
        console.log(err);
        res.status(500).json({ 
            Success: false,
            Message: err
        })
    }
}

const getById = async (req, res) => {
    const id = req.params.id;
    try{
        let data =  await User.findById(id);
        res.json(data);
    }
    catch (err){
        res.status(500).json({ 
            Success: false,
            Message: err
        })
    }
}

module.exports = {
    getById,
    loginUser
}