const mongoose = require("mongoose");
const UserSchema = require('./schemas/user');

exports.User = mongoose.model('user', UserSchema);