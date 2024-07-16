import express from 'express';
import "dotenv/config.js";
import connectToMongo from './utils/mongo.js';
import router from './routes/index.route.js';
import errorHandler from "./middlewares/errorMiddleware.js";
import cors from "cors";
import morgan from "morgan";
const server = express()

const PORT = 8081
const ready = ()=> { 
    console.log('server ready')
    connectToMongo(process.env.MONGO_URI)
}
server.listen(PORT,ready);
server.use(cors());
server.use(morgan("dev"));
//router
server.get("/", (req, res, next) => {
  try {
    return res.status(200).json({
      message: "TRELLO API",
    });
  } catch (error) {
    return next(error);
  }
});
server.use("/api/v1", router)
server.use(errorHandler);
