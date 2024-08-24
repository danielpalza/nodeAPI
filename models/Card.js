import { Schema, model } from "mongoose";

const collection = "cards"

const schema = new Schema({
    name: { type: String, required: true },
    list_id: { type: Schema.Types.ObjectId, ref: 'List', required: true },
},{timestamps: true});

const Card = model(collection, schema)
export default Card