import { bookModel } from "../models/book.js";

export const addBookController = async (req, res) => {
  try {
    const { title, author, description } = req.body;
    const newBook = await bookModel.create({ title, author, description });
    res.status(201).json({ msg: "Book added to library!", newBook });
  } catch (error) {
    console.log("error in addBookController", error);
    res.status(500).json({ msg: "Error adding book", error });
  }
};
