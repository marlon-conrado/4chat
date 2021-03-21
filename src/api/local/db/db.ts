const mongoose = require("mongoose");

const startDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/chats", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
};

export default startDB;