const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const task = new Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    linked: { type: Boolean, required: true},
    mini_task: {type:Array, required: false},
    start_date: { type: Date, required: true},
    end_date: { type: Date, required: true}
});

module.exports = mongoose.model("Task",task);