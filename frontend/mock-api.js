
(function (global) {
  const STORAGE_PREFIX = 'hasseef_mockapi_';
  const RESOURCES = [
    'solutions','projects','events','funding',
    'volunteering','coop','facilities','jobs',
    'sponsorships','vision'
  ];
  function load(resource) {
    const key = STORAGE_PREFIX + resource;
    try { return JSON.parse(localStorage.getItem(key)) || []; } catch (e) { return []; }
  }
  function save(resource, list) {
    const key = STORAGE_PREFIX + resource;
    localStorage.setItem(key, JSON.stringify(list));
  }
  function nextId(resource, list) {
    const prefix = resource.toUpperCase().slice(0, 3);
    return prefix + '-' + (list.length + 1);
  }
  const MockApi = {
    async get(resource, roleKey) {
      if (!RESOURCES.includes(resource)) throw new Error('Unknown resource: ' + resource);
      const list = load(resource);
      if (!roleKey) return list;
      return list.filter((item) => item.role === roleKey);
    },
    async post(resource, roleKey, payload) {
      if (!RESOURCES.includes(resource)) throw new Error('Unknown resource: ' + resource);
      const list = load(resource);
      const id = nextId(resource, list);
      const now = new Date().toISOString();
      const item = Object.assign({ id, role: roleKey, created_at: now, updated_at: now }, payload || {});
      list.push(item);
      save(resource, list);
      return item;
    }
  };
  global.MockApi = MockApi;
})(window);
