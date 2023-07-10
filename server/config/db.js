const mongoose = require('mongoose');
const config = require("./config");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(config.db.mongo.uri, config.db.mongo.options);
        console.log(`Database connection successful`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;