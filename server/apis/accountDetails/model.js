const { boolean } = require("@hapi/joi");
let { Schema, model } = require("mongoose");

const accountSchema = new Schema({
    accountNumber: { type: String },
    accountType: { type: String },
    isActive: { type: String },
    bankName: { type: String },
    branch: { type: String },
    bankName: { type: String },
    bankIFSC: { type: String },
    lastSettledAmount: { type: String },
    Carrier: { type: String },
    mobileNumber: { type: Number }
},  { timestamps: true });

const accountDetailsModel = model("accounts", accountSchema);

module.exports = {
    accountDetailsModel
}