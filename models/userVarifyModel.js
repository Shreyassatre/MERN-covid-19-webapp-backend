const mongoose = require("mongoose");

const endUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: { 
    type: String, 
    required: true 
  },
  phone: { 
    type: Number, 
    required: true 
  },
  age:{
      type: Number,
  },
  gender:{
      type:String,
  }
});

const EndUser = mongoose.model("enduser", endUserSchema);

module.exports = EndUser;
