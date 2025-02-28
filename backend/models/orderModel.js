import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({
    userId :{type:String , required:true},
    items :{type:Array , required:true},
    amount :{type:Number , required:true},
    address :{type:Object , required:true},
    Status:{type:String, default :"Food Processing"},
    date :{type:Date ,default:Date.now()},
    payment : {type:Boolean, default :"false"}
})

const orderModel = mongoose.model || mongoose.model("order" ,OrderSchema)

export default orderModel;