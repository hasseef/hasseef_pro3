const express = require('express');
const { listProjects, createProject } = require('../models/project');

const router = express.Router();

// GET /api/projects
router.get('/', (req, res) => {
  res.json({ status: 'success', data: listProjects() });
});

// POST /api/projects
router.post('/', (req, res) => {
  const project = createProject(req.body || {});
  res.status(201).json({ status: 'success', data: project });
});

module.exports = router;
