const express = require('express');
const { listSolutions, createSolution } = require('../models/solution');

const router = express.Router();

// GET /api/solutions
router.get('/', (req, res) => {
  res.json({ status: 'success', data: listSolutions() });
});

// POST /api/solutions
router.post('/', (req, res) => {
  const solution = createSolution(req.body || {});
  res.status(201).json({ status: 'success', data: solution });
});

module.exports = router;
