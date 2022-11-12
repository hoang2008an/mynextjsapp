import mongoose from "mongoose";
var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};
const Stringrequired = {
  type: String,
  required: true,
};
const userSchema = new mongoose.Schema({
  name: Stringrequired,

  username: Stringrequired,
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      //what does this regex match

      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, //this

      "Please fill a valid email address",
    ],
  },
  password: Stringrequired,
  image: { type: String, default: "Default" },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  createDate: {
    type: Date,
    default: Date.now(),
  },
});
export default mongoose.models.User || mongoose.model("User", userSchema);
