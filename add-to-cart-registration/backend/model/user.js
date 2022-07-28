const express = require('express');
const mongoose = require('mongoose')

const userDataSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:"Email already exist",
        required:true,
       
    },
    password:{
        type:String,
        required:true,
    }
})

const userData = new mongoose.model("usersData",userDataSchema)
module.exports = userData;