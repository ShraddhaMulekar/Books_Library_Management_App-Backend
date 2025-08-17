import jwt from "jsonwebtoken";

export const auth_middleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.json({ msg: "Please Log in now!" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECREATE_KEY);
    // console.log("decoded", decoded);
    req.user = { id: decoded.userId };
    next();
  } catch (error) {
    console.log("error in auth middleware", error);
    res.json({ msg: "Invalid or expired token", error });
  }
};
