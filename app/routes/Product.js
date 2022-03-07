module.exports = (app) => {
    app.get('/productinsert',function(req,res){
        res.sendFile("e:/dhara/PracticalTest/app/view/productinsert.html")
    });
const { insertproduct } = require("../controller/ProductinsertController");

app.post("/productinsert", insertproduct);
}
