const mongoose = require("mongoose");

const UserSchema = mongoose.schema({
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

module.exports = User;
