const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const UserSchema = mongoose.Schema({
  

    name:{type:String},
    password:{type:String},
  
      
    
   });

module.exports = mongoose.model("UserLoginModel", UserSchema,"User");