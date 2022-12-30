const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    name:{
        type: String,
    }, 
    email:{
        type: String,
    }, 
    query: {
        type: String
    }, 
    experience: {
        type: String,
    }, 
    message:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    },
    marked:{
        type: Boolean,
        default: false
    }
});

const Feedback = mongoose.model("feedback", feedbackSchema);

module.exports = Feedback;
