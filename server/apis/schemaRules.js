const Joi = require("@hapi/joi");
Joi.objectId = require("joi-objectid")(Joi);

const addPolicyDetails = data => {
    const schema =  {
        agent: Joi.string().required(),
        userType: Joi.string(),
        policy_mode: Joi.string(),
        producer: Joi.string(),
        policy_number: Joi.string().required(),
        premium_amount_written: Joi.string(),
        premium_amount: Joi.string(),
        policy_type: Joi.string(),
        company_name: Joi.string(),
        category_name: Joi.string(),
        policy_start_date: Joi.string().required(),
        policy_end_date: Joi.string().required(),
        csr: Joi.string(),
        account_name: Joi.string(),
        email: Joi.string().required(),
        gender: Joi.string().required(),
        firstname: Joi.string().required(),
        city: Joi.string(),
        account_type: Joi.string(),
        phone: Joi.string(),
        address: Joi.string(),
        state: Joi.string(),
        zip: Joi.string(),
        dob: Joi.string().required()
    }
    return Joi.validate(data, schema);
};

const updatePolicyDetails = (params, body) => {
    const schema = Joi.object({
        _id:Joi.objectId().required(),
        agent: Joi.string().required(),
        userType: Joi.string(),
        policy_mode: Joi.string(),
        producer: Joi.string(),
        policy_number: Joi.string().required(),
        premium_amount_written: Joi.string(),
        premium_amount: Joi.string(),
        policy_type: Joi.string(),
        company_name: Joi.string(),
        category_name: Joi.string(),
        policy_start_date: Joi.string().required(),
        policy_end_date: Joi.string().required(),
        csr: Joi.string(),
        account_name: Joi.string(),
        email: Joi.string().required(),
        gender: Joi.string().required(),
        firstname: Joi.string().required(),
        city: Joi.string(),
        account_type: Joi.string(),
        phone: Joi.string(),
        address: Joi.string(),
        state: Joi.string(),
        zip: Joi.string(),
        dob: Joi.string().required()
    });
    const { error } = Joi.validate({ ...params, ...body },schema);
    return error ? error.details.map(detail => detail.message) : null;
};

const getPolicyDetailsById = {
    params: {
        id: Joi.objectId().required(),
    },
};

const addAccountDetails = data => {
    const schema = {
        accountNumber: Joi.string().required(),
        accountType: Joi.string(),
        isActive: Joi.string(),
        bankName: Joi.string(),
        branch: Joi.string().required(),
        bankName: Joi.string(),
        bankIFSC: Joi.string(),
        lastSettledAmount: Joi.number(),
        Carrier: Joi.string(),
        mobileNumber: Joi.number(),
    };
    return Joi.validate(data, schema);
};

const updateAccountDetails = (params, body) => {
    const schema = Joi.object({
        _id: Joi.objectId().required(),
        accountNumber: Joi.string().required(),
        accountType: Joi.string(),
        isActive: Joi.string(),
        bankName: Joi.string(),
        branch: Joi.string().required(),
        bankName: Joi.string(),
        bankIFSC: Joi.string(),
        lastSettledAmount: Joi.number(),
        Carrier: Joi.string(),
        mobileNumber: Joi.number(),
    });
    const { error } = Joi.validate({ ...params, ...body },schema);
    return error ? error.details.map(detail => detail.message) : null;
};

const getAccountDetailsById = {
    params: {
        id: Joi.objectId().required(),
    },
};

const addUserDetails = data => {
    const schema = {
        username: Joi.string().required(),
        email: Joi.string(),
        password: Joi.string(),
        firstName: Joi.string(),
        lastName: Joi.string().required(),
        age: Joi.number(),
        dob: Joi.string(),
        LOB: Joi.string(),
        address: Joi.object({
            street: Joi.string(),
            city: Joi.string(),
            state: Joi.string(),
            zip: Joi.number()
        })
    };
    return Joi.validate(data, schema);
};

const updateUserDetails = (params, body) => {
    const schema = {
        _id: Joi.objectId().required(),
        username: Joi.string().required(),
        email: Joi.string(),
        password: Joi.string(),
        firstName: Joi.string(),
        lastName: Joi.string().required(),
        age: Joi.number(),
        dob: Joi.string(),
        LOB: Joi.string(),
        address: Joi.object({
            street: Joi.string(),
            city: Joi.string(),
            state: Joi.string(),
            zip: Joi.number()
        })
    };
    const { error } = Joi.validate({ ...params, ...body },schema);
    return error ? error.details.map(detail => detail.message) : null;
};

const getUserDetailsById = {
    params: {
        id: Joi.objectId().required(),
    },
};

module.exports = {
    addPolicyDetails,
    updatePolicyDetails,
    getPolicyDetailsById,
    getAccountDetailsById,
    updateAccountDetails,
    addAccountDetails,
    getUserDetailsById,
    updateUserDetails,
    addUserDetails
}