const mongoose = require('mongoose')

const getStatus = () => {
    return {
        server: "Alive",
        database: mongoose.STATES[mongoose.connection.readyState]
    }
};

module.exports = {
    getStatus
}