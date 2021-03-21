const mongoose = require("mongoose");

const startDB = async () => {
  await mongoose.connect("mongodb+srv://4chat:123456marlon@cluster0.7v5kk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
};

export default startDB;