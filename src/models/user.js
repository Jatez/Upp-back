const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, min: 6, required: true},
    calendars: {type:Array, required: false}
});

module.exports = mongoose.model("User",user);