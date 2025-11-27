const express = require('express');
const { listPrograms, createProgram } = require('../models/vision2030');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ status: 'success', data: listPrograms() });
});

router.post('/', (req, res) => {
  const program = createProgram(req.body || {});
  res.status(201).json({ status: 'success', data: program });
});

module.exports = router;