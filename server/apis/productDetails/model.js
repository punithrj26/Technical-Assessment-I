let { Schema, model } = require("mongoose");
let ObjectID = Schema.ObjectId;

const productSchema = new Schema({
    _id:{
        type: String,
        required:true
    },
    productCode: {type:String},
    productName: {type:String,required:true},
    MRP: {type:Number},
    retailPrice: {type:Number},
    purchasePrice: {type:Number},
    HSNCode: {type:String},
    GST_Percentage: {type:Number},
    productCategory: {type:String},
    productSubcategory1: {type:String},
    productSubcategory2: {type:String},
    productSubcategory3: {type: String},
    quantity: {type:Number},
    barcode: {type:Number},
    maxAllowedQty: {type:Number},
    packQty:{type:String},
    UOM: {type:String},//units of measure
    length: {type:String},
    breadth: {type:String},
    height: {type:String},
    weight: {type:String},
    isReturnable: {type:Boolean},
    returnWindow: {type:String},
    isVegetarian: {type:Boolean},
    manufacturerName: {type:String},
    manufacturedDate: {type:String},
    nutritionalInfo: {type:String},
    additiveInfo: {type:String},
    instructions: {type:String},
    isCancellable: {type:Boolean},
    availableOnCod: {type:Boolean},
    longDescription: {type:String},
    description: {type:String},
    organization: { type: String, ref: 'Organization' },
    images: {type:Array},
    createdBy:{type:String},
    published:{type:Boolean,default:true},
    manufacturerOrPackerName:{type:String},
    manufacturerOrPackerAddress:{type:String},
    commonOrGenericNameOfCommodity:{type:String},
    monthYearOfManufacturePackingImport:{type:String},
    importerFSSAILicenseNo:{type:String},
    brandOwnerFSSAILicenseNo:{type:String}

},{
    strict: true,
    timestamps:true
});

const Product_model = model('Product',productSchema);

module.exports = {
    Product_model
}
