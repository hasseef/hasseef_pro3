// In-memory demo model for Volunteering
const opportunities = [];

function listVolunteering() {
  return opportunities;
}

function createVolunteering(data) {
  const id = `VOL-${opportunities.length + 1}`;
  const now = new Date().toISOString();
  const opp = {
    id,
    title: data.title || '',
    description: data.description || '',
    status: data.status || 'open',
    project_id: data.project_id || null,
    region: data.region || null,
    needed_volunteers: data.needed_volunteers || 0,
    created_at: now,
    updated_at: now
  };
  opportunities.push(opp);
  return opp;
}

module.exports = { listVolunteering, createVolunteering };