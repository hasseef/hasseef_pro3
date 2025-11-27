// In-memory demo model for Cooperative Training
const coopTrainings = [];

function listCoopTrainings() {
  return coopTrainings;
}

function createCoopTraining(data) {
  const id = `COOP-${coopTrainings.length + 1}`;
  const now = new Date().toISOString();
  const ct = {
    id,
    title: data.title || '',
    description: data.description || '',
    university: data.university || null,
    host_entity: data.host_entity || null,
    status: data.status || 'pending',
    region: data.region || null,
    created_at: now,
    updated_at: now
  };
  coopTrainings.push(ct);
  return ct;
}

module.exports = { listCoopTrainings, createCoopTraining };