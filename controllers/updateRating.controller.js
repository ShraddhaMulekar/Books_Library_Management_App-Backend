import { myBookModel } from "../models/myBook.js";

export const updateRatingController = async (req, res) => {
  const { bookId } = req.params;
  const { rating } = req.body;

  try {
    // validate rating input
    if (rating < 0 || rating > 5) {
      return res.status(400).json({ msg: "Rating must be between 0 and 5" });
    }

    const updated = await myBookModel.findOneAndUpdate(
      { userId: req.user.id, bookId },
      { rating },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ msg: "Book not found for this user" });
    }

    return res.json({ msg: "Rating updated successfully!", updated });
  } catch (error) {
    console.log("error in update rating controller", error);
    return res.status(500).json({ msg: "Error updating rating", error });
  }
};
