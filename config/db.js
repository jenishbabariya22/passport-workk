const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/passportauth')

const db = mongoose.connection

db.on('connected', (err) => {
    if (err) {
        console.log("server is not start");
        return false
    }
    console.log("server is start");
})

module.exports = db