import { myBookModel } from "../models/myBook.js";

export const getMyBookController = async (req, res) => {
  try {
    const list = await myBookModel.find({ userId: req.user.id });
    // return res.json({ msg: "get my books..", list });
    return res.json(list)
  } catch (error) {
    console.log("error in get my book route", error);
    return res.json({ msg: "error in get my book route", error });
  }
};
