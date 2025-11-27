// In-memory demo model for Impact Reports
const reports = [];

function listImpactReports() {
  return reports;
}

function createImpactReport(data) {
  const id = `IMP-${reports.length + 1}`;
  const now = new Date().toISOString();
  const report = {
    id,
    project_id: data.project_id || null,
    summary: data.summary || '',
    economic_impact: data.economic_impact || null,
    social_impact: data.social_impact || null,
    knowledge_impact: data.knowledge_impact || null,
    created_at: now
  };
  reports.push(report);
  return report;
}

module.exports = { listImpactReports, createImpactReport };