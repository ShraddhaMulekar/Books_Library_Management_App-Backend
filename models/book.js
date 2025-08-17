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

export const BookModel = mongoose.Model("Book", BookSchema);
