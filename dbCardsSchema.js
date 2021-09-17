import Mongoose from "mongoose";

const cardSchema = Mongoose.Schema({
  name: String,
  imgUrl: String,
});

export default Mongoose.model("cards", cardSchema);
