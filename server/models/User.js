import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(

);

const User = mongoose.model("User", UserSchema);
export default User;