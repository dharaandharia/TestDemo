const { response } = require("express");
const product = require("../model/Productinsertmodel");

require("dotenv").config();
exports.bindlist=(req,res)=>{
    product.find({},function(err,data){
        res.send(data);
    })
}
//res.sendFile("e:/dhara/PracticalTest/app/view/productinsert.html")
