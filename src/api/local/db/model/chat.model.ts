import mongoose from "mongoose";

const { Types } = mongoose.Schema;

const Chat = new mongoose.Schema({
  members: Types.Array
});

export default mongoose.model("Chat", Chat);
