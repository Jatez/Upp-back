const { request } = require("express");
const express = require("express");
const router = express.Router();
const user = require("../models/calendar");

router.get('/', async (req, res) => {
    const calendars = await calendar.find();
    res.json(calendars);
});

router.get('/:id', async (req, res) => {
    const calendars = await calendar.findById(req.params.id);
    res.json(calendars);
});

router.post('/', async (req, res) => {
    const calendars = await calendar.create(req.body);
    res.json({ state: 200 + ' Ok' });
});

router.put('/:id', async (req, res) => {
    await calendar.findByIdAndUpdate(req.params.id, req.body);
    res.json({ state: 200 + ' Ok' });
});

router.delete('/:id', async (req, res) => {
    await calendar.findByIdAndDelete(req.params.id);
    res.json({ state: 200 + ' Ok' });
});

module.exports = router;