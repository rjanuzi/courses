import mongoose, { mongo } from "mongoose";

const authorSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
    nacionality: { type: String, required: true },
  },
  {
    versionKey: false /* No important reason, just testing different from Book. */,
  }
);

const authors = mongoose.model("authors", authorSchema);

export default authors;
