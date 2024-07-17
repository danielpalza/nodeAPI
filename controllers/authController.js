
import User from "../models/User.js";
const create = async (req, res, next) => {
    try {
      const data = req.body;
      const one = await User.create(data);
      return res.status(201).json({
        message: "CREATED USER_ID: " + one._id,
      });
    } catch (error) {
      return next(error);
    }
  };

  const login = async (req, res, next) => {
    try {
      return res.status(200).json({
        message: "LOGGED IN",
        token: req.token
      });
    } catch (error) {
      return next(error);
    }
  };
  

export { create, login}