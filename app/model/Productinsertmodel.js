
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productinsertschema = new Schema({
  
  b_id:{
      type:String,
        
        
    },
  p_name: {
    type: String,
    
  },
  p_price: {
    type: Number,
    default: true,
  },
  
});

module.exports = mongoose.model("productinsertmodel", productinsertschema,"Product");
