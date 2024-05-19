const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    const token = req.headers.authorization;

    if(!token) {
        return res.status(401).json({msg: "No token, authorization denied."});
    }

    try {
        const tokenVerify = jwt.verify(token, "shhh");
        req.user = tokenVerify.email;
        next();
    } catch (error) {
        return res.status(401).json({msg: "No token, authorization denied."});
    }
}

module.exports = {
    auth
}