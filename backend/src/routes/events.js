const express = require('express');
const { listEvents, createEvent } = require('../models/event');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ status: 'success', data: listEvents() });
});

router.post('/', (req, res) => {
  const event = createEvent(req.body || {});
  res.status(201).json({ status: 'success', data: event });
});

module.exports = router;