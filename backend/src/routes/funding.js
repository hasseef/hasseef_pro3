const express = require('express');
const { listFundings, createFunding, approveFunding } = require('../models/funding');

const router = express.Router();

// GET /api/funding
router.get('/', (req, res) => {
  res.json({ status: 'success', data: listFundings() });
});

// POST /api/funding
router.post('/', (req, res) => {
  const funding = createFunding(req.body || {});
  res.status(201).json({ status: 'success', data: funding });
});

// PUT /api/funding/:id/approve
router.put('/:id/approve', (req, res) => {
  const updated = approveFunding(req.params.id);
  if (!updated) {
    return res.status(404).json({ status: 'error', message: 'Funding not found' });
  }
  res.json({ status: 'success', data: updated });
});

module.exports = router;
