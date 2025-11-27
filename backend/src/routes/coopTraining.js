const express = require('express');
const { listCoopTrainings, createCoopTraining } = require('../models/coopTraining');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ status: 'success', data: listCoopTrainings() });
});

router.post('/', (req, res) => {
  const ct = createCoopTraining(req.body || {});
  res.status(201).json({ status: 'success', data: ct });
});

module.exports = router;