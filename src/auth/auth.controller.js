const UserModel = require('../users/user.model');

const crypto = require("crypto");
const jwt = require('jsonwebtoken');

module.exports = {
  getTokenAuth: getTokenAuth
}


function getTokenAuth (req, res) {
  let password = req.body.password;
  let passwordHashed = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");
    console.log(passwordHashed);
  UserModel.find(
    {userName : req.body.userName}
  ).then(response => {
      if(!response[0].userName) return res.sendStatus(404);
      if(response[0].password === passwordHashed) {
        let token = jwt.sign({userName : req.body.userName, admin : response[0].admin},'Perfect');
        res.send(token)
      }
      else return res.sendStatus(401);
    });
};


