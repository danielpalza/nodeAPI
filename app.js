import express from 'express';
import "dotenv/config.js";
import connectToMongo from './utils/mongo.js';

const server = express()

const PORT = 8081
const ready = ()=> { 
    console.log('server ready')
    connectToMongo(process.env.MONGO_URI)
}
server.listen(PORT,ready);