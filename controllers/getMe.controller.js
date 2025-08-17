import { userModel } from "../models/user.js";

export const getMeController = async (req, res) => {
  const user = await userModel.findById(req.user.id).select("-password");
  return res.json(user);
};