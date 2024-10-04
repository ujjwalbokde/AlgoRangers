const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];  // Extract token from 'Bearer <token>'
    console.log(token);
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }
  
    console.log("i am here");
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.user;  // Attach the decoded user (from payload) to req.user
      next();
    } catch (err) {
      res.status(401).json({ message: 'Token is not valid' });
    }
  };

module.exports = auth;
