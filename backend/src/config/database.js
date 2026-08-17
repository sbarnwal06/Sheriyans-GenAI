const mongoose = require("mongoose");

async function connectToDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB connected successfully")
    } catch(err) {
        console.log("DB connection failed", err)
    }
}

module.exports = connectToDb;