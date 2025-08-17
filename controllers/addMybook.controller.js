import { myBookModel } from "../models/myBook.js";

export const addMybookController = async (req, res) => {
  const { bookId } = req.params;

  try {
    const addBook = await myBookModel.create({ userId: req.user.id, bookId });

    return res.json({ msg: "Book added successfully!", addBook });
    
  } catch (error) {
    console.log("error in add my book route", error);
    return res.json({ msg: "error in add my book route", error });
  }
};
