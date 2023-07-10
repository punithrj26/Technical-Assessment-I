const userDetailsModel = require('./../userDetails/model').userDetailsModel;
let mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const schemaRules = require("../schemaRules");

//Api for fetching all user data available in db
const getAlluserDetails = async (req,res) => {
    try {
        let query = req.query;
        if (!query.pageNo) query.pageNo = 1;
        if (!query.perPage) query.perPage = Number.MAX_SAFE_INTEGER;
        let pageNo = parseInt(query.pageNo)
        let perPage = parseInt(query.perPage)
        let totalSkips = (pageNo - 1) * perPage;
        let totalPages, prevPage, nextPage = 0;
        let sort = req.query.sortBy ? JSON.parse(query.sortBy) : { updatedAt: -1 };
        let limit = perPage > 0 ? perPage : -1;
        let condition = {};

        let [list, totalDocs] = await Promise.all([
            userDetailsModel.find(condition).collation({ locale: 'en' }).sort(sort).skip(totalSkips).limit(perPage).lean().exec(),
            userDetailsModel.count(condition)
        ])
        totalPages = Math.ceil(totalDocs / perPage);
        prevPage = pageNo - 1;

        if (totalPages >= Number(pageNo) + 1) nextPage = Number(pageNo) + 1;

        let obj = { statusCode: 200, status: true, msg: "user details fetched successfully", data: { data: list, "total": totalDocs, "per_page": perPage, total_pages: totalPages, "current_page_no": pageNo, prev_page: prevPage, next_page: nextPage } }

        if (list && list.length) {
            return res.send(obj);
        } else {
            obj.status = false;
            obj.statusCode = 400;
            obj.msg = "Failed to fetch user data"
            return res.send(obj);
        }
    }  catch (error) {
        res.send({ status: 400, success: false, msg: error.message });
    }
}

//Api for adding user details into db
const adduserDetails = async (req,res) => {
    try {
        if(!req.body) return res.send({ statusCode: 400, status: false, msg: "req body is required", data: {} });
        const { error } = schemaRules.addUserDetails(req.body);
        if (error) return res.send({ statusCode: 400, status: false, msg: error.details[0].message });
        let docs = await userDetailsModel.create(req.body);
        if (docs) {
            res.send({ statusCode: 200, status: true, msg: "user details saved successfully", data: docs });
        } else {
            res.send({ statusCode: 400, status: false, msg: "Failed to fecth data", data: {} });
        }
    } catch (error) {
        res.send({ status: 400, success: false, msg: error.message });
    }
}

//Api for fetching user details using object id
const getuserDetailsById = async (req,res) => {
    try {
        if(!req.params.id) return res.send({ statusCode: 400, status: false, msg: "Object id is required", data: {} });
        let docs = await userDetailsModel.find({ _id : req.params.id});
        if (docs && docs.length > 0) {
            res.send({ statusCode: 200, status: true, msg: "Details fetched successfully", data: docs });
        } else {
            res.send({ statusCode: 400, status: false, msg: "Failed to fecth data", data: {} });
        }
    } catch (error) {
        res.send({ status: 400, success: false, msg: error.message });
    }
}

//Api fro updating user data
const updateuserDetails = async (req,res) => {
    try {
        if(!req.params._id) return res.send({ statusCode: 400, status: false, msg: "Object id is required", data: {} });
        if(!req.body) return res.send({ statusCode: 400, status: false, msg: "req body is required", data: {} });
        const { error } = schemaRules.updateUserDetails(req.params._id, req.body);
        if (error) return res.send({ statusCode: 400, status: false, msg: error.details[0].message });
        let docs = await userDetailsModel.updateOne({_id: req.params._id},req.body);
        if (docs) {
            res.send({ statusCode: 200, status: true, msg: "user details updated successfully", data: docs });
        } else {
            res.send({ statusCode: 400, status: false, msg: "Failed to update data", data: {} });
        }
    } catch (error) {
        res.send({ status: 400, success: false, msg: error.message });
    }
}

//Api for removing data object of a user
const removeuserDetailsById = async (req,res) => {
    try {
        if(!req.params.id) return res.send({ statusCode: 400, status: false, msg: "Object id is required", data: {} });
        let docs = await userDetailsModel.deleteOne({ _id: req.params.id });
        if (docs && docs.deletedCount > 0) {
            res.send({ statusCode: 200, status: true, msg: "user details deleted successfully", data: docs });
        } else {
            res.send({ statusCode: 400, status: false, msg: "Failed to delete user data", data: {} });
        }
    } catch (error) {
        res.send({ status: 400, success: false, msg: error.message });
    }
}

module.exports = {
    getuserDetailsById,
    adduserDetails,
    getAlluserDetails,
    removeuserDetailsById,
    updateuserDetails
}