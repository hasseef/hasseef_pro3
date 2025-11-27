// In-memory demo model for Solutions
const solutions = [];

function listSolutions() {
  return solutions;
}

function createSolution(data) {
  const id = `SOL-${solutions.length + 1}`;
  const now = new Date().toISOString();
  const solution = {
    id,
    title: data.title || '',
    description: data.description || '',
    status: data.status || 'draft',
    owner: data.owner || null,
    region: data.region || null,
    created_at: now,
    updated_at: now
  };
  solutions.push(solution);
  return solution;
}

module.exports = { listSolutions, createSolution };
