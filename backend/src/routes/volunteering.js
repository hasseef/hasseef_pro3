const express = require('express');
const { listVolunteering, createVolunteering } = require('../models/volunteering');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ status: 'success', data: listVolunteering() });
});

router.post('/', (req, res) => {
  const opp = createVolunteering(req.body || {});
  res.status(201).json({ status: 'success', data: opp });
});

module.exports = router;