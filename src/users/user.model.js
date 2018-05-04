const mongoose = require('mongoose');

var Userschema = mongoose.Schema({
    userName: {
      type: String,
      required: [true, 'Name is requiered.'],
      minlength: [2, 'Be sure to enter at least 2 characters.'],
      unique : true 
    },
    password: {
      type: String,
      required: [true, 'Enter a password.'],
      minlength: [6, 'The password must be at least 6 characters long.']
    },
    admin: {
      type: Boolean,
      required: true
    },
    createdAt: {
      type: Number,
      required: true
    },
},
    { versionKey: false }
);

var USER = mongoose.model('users', Userschema);

module.exports = USER;