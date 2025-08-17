import { myBookModel } from "../models/myBook.js";

export const updateStatusController = async (req, res) => {
  const { bookId } = req.params;
  const { status } = req.body;
  const updated = await myBookModel.findOneAndUpdate(
    { userId: req.user.id, bookId },
    { status },
    { new: true }
  );
  res.json(updated);
};