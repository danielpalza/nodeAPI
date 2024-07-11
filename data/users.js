import "dotenv/config.js"
import  connectToMongo from "../utils/mongo.js"
import User from "../models/User.js"

const users = [
    {
    username: 'Admin',
    email: 'admin@example.com',
    password: 'admin1234'
   
}, {

    username: 'User',
    email: 'user@example.com',
    password: 'password123'
    
}    
]

 async function createData() {
    try {
        await connectToMongo(process.env.MONGO_URI)
        await User.insertMany(users)
        console.log("done!!");
    } catch (error) {
        console.log(error);
    }
}

createData(User);