const express = require('express')
const router = new express.Router();
const userData = require('../model/user')

// CREATE
// router.post("/",async(req,res)=>{
//     try{
//         const addUser = new userData(req.body)
//         console.log(req.body);
//         console.log("posted");
//         // console.log(addUser);
//         const inserUser = await addUser.save({});
//         res.status(201).send(inserUser)
//     }
//     catch(err){
//         res.status(400).send(err)
//     }
// });

// router.get("/",async(req,res)=>{
//     try{
//         const getUser = await userData.find({})
//         res.send(getUser);
//     }
//     catch(err){
//         res.status(400).send(err)
//     }
// })


// Read
const readfile = require('../middleware/read');
const readthat = require('../middleware/readthat');
const writefile = require('../middleware/write');
const editfile = require('../middleware/edit');
const deletefile = require('../middleware/remove');

router.get('/',readfile.ReadData);
router.get('/:id',readthat.ReadParticularData);
router.post('/',writefile.writeData);
router.patch('/:id',editfile.updateData);
router.delete('/:id',deletefile.deleteData);




// Get by ID 

// router.get("/:id",async(req,res)=>{
//     try{
//         console.log(req.params.id);
//         const _id = req.params.id 
//         const getThatUser = await userData.findById(_id);
//         res.send(getThatUser);
//     }
//     catch(err){
//         res.status(400).send(err)
//     }
// })


// Update = Patch

// router.patch("/:id",async(req,res)=>{
//     try{
//         const _id = req.params.id
//         console.log(req.params.id);
//         const updateUser = await userData.findByIdAndUpdate(_id,req.body, {new:true});
//         res.send(updateUser);
//     }
//     catch(err){
//         res.status(500).send(err)
//     }
// })


// Remove = Delete

// router.delete("/:id",async(req,res)=>{
//     try{
//         const deleteUser = await userData.findByIdAndDelete(req.params.id);
//         res.send(deleteUser);
//     }
//     catch(err){
//         res.status(500).send(err)
//     }
// })

module.exports = router