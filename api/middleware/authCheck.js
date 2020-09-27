const jwt = require('jsonwebtoken');
const config = require('../../config');
const localStorage = require('localStorage');


module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token, config.secret);
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            "message": "Auth failed"
        })
    }

}