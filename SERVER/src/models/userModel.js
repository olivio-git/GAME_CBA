import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  fullName: {
    type: String,
  },
  age: {
    type: String,
  },
  email: {
    type: String,
  },
});
const User = mongoose.model("User", UserSchema);

export default User;
