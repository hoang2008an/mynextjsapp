import mongoose from "mongoose";
const Stringrequired={
    type:String,
    required:true,
}
const userSchema= new mongoose.Schema({
    firstname:Stringrequired,
    lastname:Stringrequired,

    username: Stringrequired,
    email: String,
    password: Stringrequired,
    image: String,
    isAdmin: Boolean
});
export default mongoose.model("User", userSchema);