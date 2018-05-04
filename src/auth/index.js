const router = require('express').Router();
const { getTokenAuth } = require ('./auth.controller');

router.post('/login', getTokenAuth);

module.exports = router;
module.exports.middlewareauth = require('./middleware/authMiddleware')
module.exports.middlewareblock = require('./middleware/userblock')