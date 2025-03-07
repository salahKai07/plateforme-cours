const jwt = require('jsonwebtoken');

const JWT_SECRET = 'srak-fbir'; 

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).send('Access denied. No token provided.');
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId; 
        next();
    } catch (ex) {
        res.status(400).send('Invalid token.');
    }
};

module.exports = verifyToken;