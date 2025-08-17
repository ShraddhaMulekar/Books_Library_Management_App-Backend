import { logoutModel } from "../models/logout.js";

export const logOutController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.json({ msg: "token is required! or User not log in!" });
    }

    const logOutToken = await logoutModel.create({ token });

    return res.json({ msg: "Log out Successful!", logOutToken });
  } catch (error) {
    console.log("error in log out route", error);
    return res.json({ msg: "error in log out route", error });
  }
};
