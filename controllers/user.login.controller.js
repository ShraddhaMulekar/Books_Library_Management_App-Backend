import jwt from "jsonwebtoken";
import { userModel } from "../models/user.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const matchEmail = await userModel.findOne({ email });

    if (!matchEmail) {
      return res.json({
        msg: "You are not registered! Please registered now!",
      });
    } else {
      bcrypt.compare(password, matchEmail.password, (err, result) => {
        if (result) {
          let token = jwt.sign(
            { userId: matchEmail._id },
            process.env.SECREATE_KEY
          );
          //   console.log(token);
          return res.json({ msg: "Log in successful!", token });
        } else {
          return res.json({ msg: "err in password. Check once!", err });
        }
      });
    }
  } catch (error) {
    console.log("error in log in", error);
    return res.json({ msg: "error in log in", error });
  }
};
