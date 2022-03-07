module.exports = (app) => {
    const { bindlist } = require("../controller/brandcontroller");
    app.get('/productfilter',function(req,res){
        res.sendfile("e:/dhara/PracticalTest/app/view/productfilter.html")
    })
        
    }