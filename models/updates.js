const mongoose = require('mongoose');

const updatesShema = new mongoose.Schema({
    heading:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    note:{
        type:String,
        required:true,
        trim:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String
    },
    num:{
        type:Number,
        required:true,
        unique:true
    },
    p1:{
        type:String
    },
    p2:{
        type:String
    },
    p3:{
        type:String
    },
    p4:{
        type:String
    },
    p5:{
        type:String
    },
    p6:{
        type:String
    },
    p7:{
        type:String
    },
    p8:{
        type:String
    },
    source:{
        type:String
    },
    img:{
        type:String
    }
})

const LatestUpdates = new mongoose.model("LatestUpdates", updatesShema);

module.exports = LatestUpdates;
