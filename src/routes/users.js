const { request } = require("express");
const express = require("express");
const router = express.Router();
const user = require("../models/user");

router.get('/', async (req, res) => {
    const users = await user.find();
    res.json(users);
});

router.get('/:id', async (req, res) => {
    const users = await user.findById(req.params.id);
    res.json(users);
});

router.post('/', async (req, res) => {
    const users = await user.create(req.body);
    res.json({ state: 200 + ' Ok' });
});

router.put('/:id', async (req, res) => {
    await user.findByIdAndUpdate(req.params.id, req.body);
    res.json({ state: 200 + ' Ok' });
});

router.delete('/:id', async (req, res) => {
    await user.findByIdAndDelete(req.params.id);
    res.json({ state: 200 + ' Ok' });
});

module.exports = router;