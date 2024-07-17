import { Schema, model } from "mongoose";

const collection = "users"

const schema = new Schema({
    username: { type: String, required: true},
    email: { type: String, required: true, unique: true, index: true},
    password: {type: String, required: true},
    avatar: {type: String, default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Favatar_266033&psig=AOvVaw0CiFSEyZkveCQg-Nq3ESuh&ust=1720290359799000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDVs5DDkIcDFQAAAAAdAAAAABAE"}
},{timestamps: true});

const User = model(collection, schema)
export default User