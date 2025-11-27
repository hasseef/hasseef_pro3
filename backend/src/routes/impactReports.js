const express = require('express');
const { listImpactReports, createImpactReport } = require('../models/impactReport');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ status: 'success', data: listImpactReports() });
});

router.post('/', (req, res) => {
  const report = createImpactReport(req.body || {});
  res.status(201).json({ status: 'success', data: report });
});

module.exports = router;