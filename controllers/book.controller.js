import { bookModel } from "../models/book.js";

export const bookController = async (req, res) => {
  try {
    const allBooks = await bookModel.find();
    allBooks.save();
    return res.json({ msg: "Check your all books", allBooks });
  } catch (error) {
    console.log("error in book route", error);
    res.json({ msg: "error in book route", error });
  }
};
