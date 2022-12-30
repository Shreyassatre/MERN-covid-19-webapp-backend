const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }, 
    phone:{
        type: Number,
        required: true
    }, 
    email: {
        type: String,
        required: true
    }, 
    address: {
        type: String,
        required: true
    }, 
    amount:{
        type: String,
        required: true
    },
    recipt:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
});

const Donation = mongoose.model("donation", paymentSchema);

module.exports = Donation;
