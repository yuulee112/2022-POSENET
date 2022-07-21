const { Schema } = require('mongoose');
const shortId = require('./type/shortId');

// 회원 스키마 작성
module.exports = new Schema({
    shortId,
    email: String,
    password: String,
    name: String,
}, {
    timestamps: true,
});
