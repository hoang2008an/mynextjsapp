import mongoose from "mongoose";
const userSchema= new mongoose.Schema({
    name: String,
    nickname: String,
    email: String,
    password: String,
    image: String,
    isAdmin: Boolean
});
export default mongoose.models.User || mongoose.model("User", userSchema);