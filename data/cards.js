import "dotenv/config.js"
import faker from "@faker-js/faker"
import  connectToMongo from "../utils/mongo.js"
import Card from "../models/Card.js"
import List from "../models/List.js"

const card = {
    title: faker.lorem.words({ min: 1, max: 10}),
    email: faker.lorem.text(),
    list_id: List.list_id
   
}

 async function createData() {
    try {
        await connectToMongo(process.env.MONGO_URI)
        for (let i = 1; i <= 10; i++) {
            await Card.inserOne(card)
            
        }
      
        console.log("done!!");
    } catch (error) {
        console.log(error);
    }
}

createData(Card);