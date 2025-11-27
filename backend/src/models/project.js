// In-memory demo model for Projects
const projects = [];

function listProjects() {
  return projects;
}

function createProject(data) {
  const id = `PRJ-${projects.length + 1}`;
  const now = new Date().toISOString();
  const project = {
    id,
    title: data.title || '',
    description: data.description || '',
    status: data.status || 'draft',
    solution_id: data.solution_id || null,
    region: data.region || null,
    created_at: now,
    updated_at: now
  };
  projects.push(project);
  return project;
}

module.exports = { listProjects, createProject };
