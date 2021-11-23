const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calendar = new Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    linked: { type: Boolean, required: true},
    tasks: {type:Array, required: false}
});

module.exports = mongoose.model("Calendar",calendar);