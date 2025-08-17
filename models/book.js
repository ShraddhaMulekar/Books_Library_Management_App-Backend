import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    coverImage: String,
    availability: Boolean,
  },
  {
    versionKey: false,
  }
);

export const bookModel = mongoose.model("Book", BookSchema);
