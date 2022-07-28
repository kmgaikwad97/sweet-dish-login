const express = require('express');
const userData = require('../model/user')

const writeData = async(req,res)=>{
    try{
        const addUser = new userData(req.body)
        console.log(req.body);
        console.log("posted");
        // console.log(addUser);
        const inserUser = await addUser.save({});
        res.status(201).send(inserUser)
    }
    catch(err){
        res.status(400).send(err)
    }
}

module.exports = { writeData }

