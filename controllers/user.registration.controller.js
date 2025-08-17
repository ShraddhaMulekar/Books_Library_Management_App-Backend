import { userModel } from "../models/user.js";
import bcrypt from "bcrypt";

export const registrationController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ msg: "Email and Password both are required!" });
  }

  try {
    const matchEmail = await userModel.findOne({ email });

    if (matchEmail) {
      return res.json({
        msg: "You have already register with same email. Please Log in Now!",
        matchEmail,
      });
    } else {
      bcrypt.hash(
        password,
        Number(process.env.SALTROUNDS),
        async (err, hash) => {
          if (err) {
            return res.json({ msg: "erro in registered!", err });
          } else {
            const newUser = userModel({ email, password: hash });
            await newUser.save();
            return res.json({ msg: "Registration Successful!", newUser });
          }
        }
      );
    }
  } catch (error) {
    console.log("error", error);
    return res.json({ msg: "error in registration route", error });
  }
};
