const mongoose = require('mongoose');

var Customerschema = mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Name is requiered.'],
    },
    surname: {
      type: String,
      required: [true, 'Surname is requiered.'],
    },
    photo: {
      type: String
    },
    createdAt: {
      type: Number,
      required: true
    },
    createdBy: {
      type: String,
      required: true
    },
    lastUpdate: {
      type: String,
      required: true
    },
},
    { versionKey: false }
);

var COSTOMER = mongoose.model('customers', Customerschema);

module.exports = COSTOMER;