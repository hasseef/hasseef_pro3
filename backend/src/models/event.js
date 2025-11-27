// In-memory demo model for Events
const events = [];

function listEvents() {
  return events;
}

function createEvent(data) {
  const id = `EVT-${events.length + 1}`;
  const now = new Date().toISOString();
  const event = {
    id,
    title: data.title || '',
    description: data.description || '',
    status: data.status || 'draft',
    project_id: data.project_id || null,
    region: data.region || null,
    starts_at: data.starts_at || null,
    ends_at: data.ends_at || null,
    created_at: now,
    updated_at: now
  };
  events.push(event);
  return event;
}

module.exports = { listEvents, createEvent };