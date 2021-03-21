import mongoose from "mongoose"

const { Types } = mongoose.Schema;

export const Member = new mongoose.Schema({
  name: Types.String,
  secondName: Types.String,
  lastName: Types.String,
  secondLastName: Types.String,
  cognitoId: Types.String,
  email: Types.String
});

export default mongoose.model("Member", Member);
