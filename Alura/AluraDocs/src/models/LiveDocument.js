import mongoose from "mongoose";

const liveDocumentschema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true, unique: true },
    text: { type: String },
  },
  {
    versionKey: false /* No important reason, just testing different from Book. */,
  }
);

const liveDocuments = mongoose.model("live_documents", liveDocumentschema);

export default liveDocuments;
