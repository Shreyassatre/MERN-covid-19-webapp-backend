const router = require("express").Router();
const bcrypt = require("bcryptjs");
const EndUser = require("../models/userVarifyModel");
const jwt = require("jsonwebtoken");

// register

router.post("/", async (req, res)=>{
    try{
        const {name, email, phone, age, gender} = req.body;
  
        //save new user account to the database
        const newUser = new EndUser({
            name, email, phone, age, gender
        });
  
        const savedUser = await newUser.save();
  
    } catch (err) {
        console.error(err);
        res.status(500).send(); 
    }
});

module.exports = router;
