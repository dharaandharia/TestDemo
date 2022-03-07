
const User = require("../model/UserLoginModel");
const bodyparser=require("body-parser");
require("dotenv").config();
exports.login=(req,res)=>{
//const uname=req.body.txtuname;
//console.log("uname= "+User.Uname);

console.log("uname= "+User.name);
// $or: [
//         {title: title},
//         {main_actor: main_actor}
//         // ...
//     ]
// });
User.find(
        //$or:
        
        //[
        {name:req.body.txtuname} ,
        {password:req.body.txtpass}

        ,function (err, user) {
   
        if(user[0]!=null)
        {

                res.send(user[0]);
       // res.redirect("/productinsert")
    
        }
        else
        {
                res.send("user does not exist");
        }
    

})}