const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  jwt.verify(token, 'Perfect', (err, decoded) => {

    console.log(decoded);

    if (!decoded.admin) return res.sendStatus(401);
    if (err) return res.sendStatus(403);

    // share with all the routes
    req.auth = decoded
    // proceed!
    next()
  })
}