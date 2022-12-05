const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    _id: { 
        type: Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true,
        maxLength: 30
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    token:{
        type: String,
        required: false
    }
});

module.exports = mongoose.model('User', userSchema);