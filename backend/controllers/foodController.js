<<<<<<< HEAD
import { console } from "inspector";
import foodModel from "../models/foodModel.js";
import fs from "fs";

// add food items

const addfood = async (req, res) => {
  // if (!req.file || !req.body.name || !req.body.description || !req.body.price || !req.body.category) {
  //     return res.status(400).json({ success: false, message: "All fields are required!" });
  // }

  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// all food  list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// remove food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {}); //delete from file uploads

    await foodModel.findByIdAndDelete(req.body.id); //delete from database
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addfood, listFood, removeFood };
=======
import { console } from "inspector";
import foodModel from "../models/foodModel.js";
import fs from 'fs';


// add food items 

const addfood = async (req, res)=>{
     
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description: req.body.description,
        price: req.body.price,
        category : req.body.category,
        image: image_filename
    })

    try {
        await food.save();
        res.json({success: true , message: "Food Added" })
    }
    catch(error){
        console.log(error)
        res.json({success:false , message: "Error"})
    }
}


// all food  list
const listFood = async(req,res)=>{
   try {
       const foods = await foodModel.find({})
       res.json({success:true , data: foods})
   } catch (error) {
       console.log(error)
       res.json({success:false, message:'Error'})
   }
}


// remove food item
const removeFood = async (req, res)=>{
   try {
      const food = await foodModel.findById(req.body.id);    
      fs.unlink(`uploads/${food.image}`,()=>{})            //delete from file uploads

      await foodModel.findByIdAndDelete(req.body.id)       //delete from database
      res.json({success:true, message:"Food Removed"})
   } catch (error) {
       console.log(error)
       res.json({success:false, message:"Error"})
   }
}



export {addfood, listFood, removeFood}
>>>>>>> 2640bdbad32602d34b86135de4a00bf02b6888b3
