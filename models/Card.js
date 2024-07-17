import { Schema, model } from "mongoose";

const collection = "cards"

const schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, default: '' },
    list_id: { type: Schema.Types.ObjectId, ref: 'List', required: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    card_id: { type: Schema.Types.ObjectId },
},{timestamps: true});

const Card = model(collection, schema)
export default Card