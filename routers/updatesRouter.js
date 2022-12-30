const router = require("express").Router();
const LatestUpdates = require("../models/updates");

router.post("/", async(req,res)=>{
    try{
        const addingUpdates = new LatestUpdates(req.body)
        console.log(req.body);
        const insertUpdates = await addingUpdates.save();
        res.status(201).send(insertUpdates);
    }catch(e){
        res.status(400).send(e);
    }
});

router.get("/",async(req, res) => {
    try{
        const getUpates = await LatestUpdates.find({}).sort({"num":-1});
        res.status(200).send(getUpates);
    }catch(e){
        res.status(400).send(e);
    }
});

router.get("/:id",async(req, res) => {
    try{
        const _id = req.params.id;
        const getUpate = await LatestUpdates.findById({_id})
        res.status(200).send(getUpate);
    }catch(e){
        res.status(400).send(e);
    }
});

router.patch("/:id",async(req, res) => {
    try{
        const _id = req.params.id;
        const getUpate = await LatestUpdates.findByIdAndUpdate(_id,req.body, {
            new:true
        })
        res.send(getUpate);
    }catch(e){
        res.status(500).send(e);
    }
});

router.delete("/:id",async(req, res) => {
    try{
        const _id = req.params.id;
        const getUpate = await LatestUpdates.findByIdAndDelete({_id})
        res.send("Update Deleted");
    }catch(e){
        res.status(500).send(e);
    }
});

module.exports = router;