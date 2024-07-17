import { Schema, model } from "mongoose";

const collection = "activities"

const schema = new Schema({
    action: { type: String, required: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    board_id: { type: Schema.Types.ObjectId, ref: 'Board', required: true }
},{timestamps: true});

const Activity = model(collection, schema)
export default Activity