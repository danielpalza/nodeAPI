
import Card  from "../models/Card.js";
const create = async (req, res, next) => {
    try {
      const data = req.body;
      const one = await Card.create(data);
      return res.status(201).json({
        message: "CREATED CARD_ID: " + one._id,
      });
    } catch (error) {
      return next(error);
    }
  };
  const read = async (req, res, next) => {
    try {
      const one = await Card.findById(req.body._id);
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
      const one = await Card.findByIdAndUpdate(data._id,data);
      return res.status(201).json({
        message: "UPDATED Card_ID: " + one._id,
      });
    } catch (error) {
      return next(error);
    }
  };

  const deleteCard = async (req, res, next) => {
    try {
      const one = await Card.deleteOne({ _id: req.body._id });
      if(one>0){
        return res.status(201).json({
          message: "DELETED Card_ID: " + one._id,
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

export { create, read, update, deleteCard}