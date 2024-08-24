
import List  from "../models/List.js";
const create = async (req, res, next) => {
    try {
      const data = req.body;
      console.log(data);
      
      const one = await List.create(data);
      return res.status(201).json({
        message: "CREATED LIST_ID: " + one._id,
      });
    } catch (error) {
      return next(error);
    }
  };
  const read = async (req, res, next) => {
    const list = [];
    try {
      const all = await List.find();
      console.log(all);
      
      all.forEach(e => {
        list.push({name:e.name, id:e._id})
      });
      console.log(list);
      if(all){
        return res.status(201).json({message:"success",data:list});
      }
      else{
        return res.status(400).json({
            message: "failed to find lists", data: null
          });
      }
      
    } catch (error) {
      return next(error);
    }
  };

  const update = async (req, res, next) => {
    try {
      const data = req.body;
      const one = await List.findByIdAndUpdate(data._id,data);
      return res.status(201).json({
        message: "UPDATED List_ID: " + one._id,
      });
    } catch (error) {
      return next(error);
    }
  };

  const deleteList = async (req, res, next) => {
    try {
      console.log( req.body._id);
      
      const one = await List.deleteOne({ _id: req.body._id });

      console.log(one);
      
      if(one.acknowledged){
        return res.status(201).json({
          message: "DELETED List_ID: " + one._id,
        });
      }
      else{
        return res.status(400).json({
            message: "Failed to delete"+req.body._id , data: null
          });
      }
    
    } catch (error) {
      return next(error);
    }
  };

export { create, read, update, deleteList}