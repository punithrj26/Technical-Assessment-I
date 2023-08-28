let { Schema, model } = require("mongoose");
let ObjectID = Schema.ObjectId;

const organizationSchema = new Schema({ //Users who has login ability should go under User schema
    _id:{
        type: String,
        required:true,
    },
    name: {type:String,required:true},
    address: {type:String},
    contactEmail:{type:String},
    contactMobile:{type:String},
    addressProof:{type:String},
    idProof:{type:String},
    bankDetails:{
        accHolderName:{type:String},
        accNumber:{type:String},
        IFSC:{type:String},
        cancelledCheque:{type:String},
        bankName:{type:String},
        branchName:{type:String}
    },
    PAN:{PAN:{type:String},proof:{type:String}},
    GSTN:{GSTN:{type:String},proof:{type:String}},
    FSSAI:{type:String},
    createdAt:{
        type:Number,
        default:Date.now()
    },
    storeDetails:{
        categories: {type:Object},
        logo: {type:String},
        location: new mongoose.Schema({lat:{type:Number},long:{type:Number}},{ _id: true }),
        locationAvailabilityPANIndia:{type:Boolean},
        city:{type:Object},
        defaultCancellable:{type:Boolean},
        defaultReturnable:{type:Boolean},
        address: {
            building: {type:String},
            city: {type:String},
            state: {type:String},
            country: {type:String},
            area_code: {type:String},
            locality: {type:String}
        },
        supportDetails:{
            email:{type:String},
            mobile:{type:String}
        },
        storeTiming:{type:Object},
        radius:{type:Object},
        logisticsBppId:{type:String}
    },
    createdBy:{type:String}
},{
    strict: true,
    timestamps:true
});

const Organization_model = model('Organization',organizationSchema);

module.exports = {
    Organization_model
}
