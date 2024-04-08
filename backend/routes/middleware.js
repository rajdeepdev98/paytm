const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const authMiddleware = async (req, res, next) => {
  // const auth=req.headers.authorization;
  // const words=auth.split(" ");//["Bearer","Token"];
  const token = req?.headers?.authorization?.split(" ")[1];
  //   if (!authHeader || !authHeader.startsWith('Bearer ')) {
  //     return res.status(403).json({});
  console.log("middleware");
  // }
  if (!token) {
    return res.status(403).json({
      message: "Unauthorized!",
    });
  }
  try {
    const decodedToken = jwt.verify(token, JWT_SECRET);
    if (decodedToken.userId) {
      req.userId = decodedToken.userId;
      next();
    } else {
      return res.status(403).json({ message: "Unauthorized!" });
    }
  } catch (e) {
    return res.status(403).json({ message: "Unauthorized!" });
  }
};

module.exports = { authMiddleware };
