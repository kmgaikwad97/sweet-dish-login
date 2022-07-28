const express = require('express');
const userData = require('../model/user')

const ReadParticularData = async(req,res)=>{
    try{
        console.log(req.params.id);
        const _id = req.params.id 
        const getThatUser = await userData.findById(_id);
        res.send(getThatUser);
    }
    catch(err){
        res.status(400).send(err)
    }
}

module.exports = { ReadParticularData }

