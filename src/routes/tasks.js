const { request } = require("express");
const express = require("express");
const router = express.Router();
const user = require("../models/task");

router.get('/', async (req, res) => {
    const tasks = await task.find();
    res.json(tasks);
});

router.get('/:id', async (req, res) => {
    const tasks = await task.findById(req.params.id);
    res.json(tasks);
});

router.post('/', async (req, res) => {
    const tasks = await task.create(req.body);
    res.json({ state: 200 + ' Ok' });
});

router.put('/:id', async (req, res) => {
    await task.findByIdAndUpdate(req.params.id, req.body);
    res.json({ state: 200 + ' Ok' });
});

router.delete('/:id', async (req, res) => {
    await task.findByIdAndDelete(req.params.id);
    res.json({ state: 200 + ' Ok' });
});

module.exports = router;