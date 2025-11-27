// In-memory demo model for Vision 2030 Mapping
const programs = [];

function listPrograms() {
  return programs;
}

function createProgram(data) {
  const id = `V2030-${programs.length + 1}`;
  const program = {
    id,
    program_name: data.program_name || '',
    strategic_goal: data.strategic_goal || '',
    sub_goal: data.sub_goal || '',
    detailed_goal: data.detailed_goal || '',
    indicator: data.indicator || '',
    main_entity: data.main_entity || '',
    supporting_entities: data.supporting_entities || [],
    region: data.region || null
  };
  programs.push(program);
  return program;
}

module.exports = { listPrograms, createProgram };