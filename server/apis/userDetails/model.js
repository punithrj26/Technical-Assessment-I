let { Schema, model } = require("mongoose");

const usersSchema = new Schema({
    username: { type: String },
    email: { type: String },
    password: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number },
    dob: { type: String },
    LOB: { type: String },
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        zip: { type: Number }
    }
}, { timestamps: true })

const userDetailsModel = model("users", usersSchema);

module.exports = {
    userDetailsModel,
};