
import Board  from "../models/Board.js";
const create = async (req, res, next) => {
    try {
      const data = req.body;
      const one = await Board.create(data);
      return res.status(201).json({
        message: "CREATED BOARD_ID: " + one._id,
      });
    } catch (error) {
      return next(error);
    }
  };
  const read = async (req, res, next) => {
    try {
      const one = await Board.findById(req.body._id);
      if(one){
        return res.status(201).json({message:"success",data:one});
      }
      else{
        return res.status(400).json({
            message: "failed", data: null
          });
      }
      
    } catch (error) {
      return next(error);
    }
  };
  const update = async (req, res, next) => {
    try {
      const data = req.body;
      const one = await Board.findByIdAndUpdate(data._id,data);
      return res.status(201).json({
        message: "UPDATED BOARD_ID: " + one._id,
      });
    } catch (error) {
      return next(error);
    }
  };

  const deleteBoard = async (req, res, next) => {
    try {
      const one = await Board.deleteOne({ _id: req.body._id });
      if(one>0){
        return res.status(201).json({
          message: "DELETED BOARD_ID: " + one._id,
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

export { create, read, update, deleteBoard}