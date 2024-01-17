const user = require("../model/usermodel");

//making the routes

// create
const getcreate = async(req,res) =>{
    const {foodname,price,desc} = req.body;
    try{
      const userAdded = await user.create({
        foodname: foodname,
        price: price,
        desc: desc,
      });
      res.status(201).json(userAdded);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
}

//read
const getread = async(req,res) =>{
  try{
    const show = await user.find();
    res.status(200).json(show);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

//searchbyuser
const getsearch = async(req,res) =>{
  const {id} = req.params;
  try{
    const show_single_user = await user.findById({_id:id});
    res.status(200).json(show_single_user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

//delete 
const getdelete = async(req,res) =>{
  const {id} = req.params;
  try{
    const show_single_user = await user.findByIdAndDelete({_id:id});
    res.status(200).json(show_single_user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

//update
const getupdate = async(req,res) =>{
  const {id} = req.params;
  const{foodname,price,desc} = req.body;
  try{
    const show_single_user = await user.findByIdAndUpdate(id,req.body,{new:true});
    res.status(200).json(show_single_user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

//exporting it
module.exports = {getcreate,getread,getsearch,getdelete,getupdate};