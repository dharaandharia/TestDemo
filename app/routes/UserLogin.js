module.exports = (app) => {
    app.get('/signin',function(req,res){
        res.sendFile("e:/dhara/PracticalTest/app/view/LoginForm.html");
    })
    const { login } = require("../controller/UserLoginController");

    app.post("/signin", login);
        
    
};