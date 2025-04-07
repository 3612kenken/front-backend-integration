const mongoose = require('mongoose');
const { Schema } = mongoose;
const businessSchema = new Schema({
    company_id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    company:{
        type: String,
        required: true,
    },
    business_type:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    income: {
        type: Number,
        required: true,
    },
    investment: {
        type: Number,
        required: true,
    },
}, { collection: 'tbl_business' });
const Business = mongoose.model('Business', businessSchema);
module.exports = Business;