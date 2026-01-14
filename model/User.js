const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const userSign=new mongoose.Schema({
name:{
    type:String,
    required:true
},
username:{
    type:String,
    required:true,
    unique:true
},
role:{
    type:String,
    required:true

}
,email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
}

})

const User=mongoose.model("User",userSign);

module.exports=User;
