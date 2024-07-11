import { Schema, model } from "mongoose";

const collection = "boards"

const schema = new Schema({
    username: { type: String, required: true},
    description: { type: String, default: ''},
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true }

},{timestamps: true});

const Board = model(collection, schema)
export default Board