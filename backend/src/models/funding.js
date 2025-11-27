// In-memory demo model for Funding
const fundings = [];

function listFundings() {
  return fundings;
}

function createFunding(data) {
  const id = `FND-${fundings.length + 1}`;
  const now = new Date().toISOString();
  const funding = {
    id,
    project_id: data.project_id || null,
    amount_requested: data.amount_requested || 0,
    status: data.status || 'pending',
    donor_id: data.donor_id || null,
    created_at: now,
    updated_at: now
  };
  fundings.push(funding);
  return funding;
}

function approveFunding(id) {
  const f = fundings.find(x => x.id === id);
  if (!f) return null;
  f.status = 'approved';
  f.updated_at = new Date().toISOString();
  return f;
}

module.exports = { listFundings, createFunding, approveFunding };
