import mongoose from "mongoose"

const { Types } = mongoose.Schema;

const Message = new mongoose.Schema({
  message: { type: Types.String, required: [true, "invalid message"] },
  chatId: { type: Types.ObjectId, required: [true, "invalid chatId"] },
  emisor: {
    memberId: { type: Types.ObjectId, required: [true, "invalid memberId"] }
  }
});

export default mongoose.model("Message", Message);
