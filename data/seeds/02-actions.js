
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {task: 'vaccum the carpet', notes: 'dirty carpet', complete: 'false', project_id: 1},
        {task: 'clean the dishes', notes: 'dirty dishes', complete: 'true', project_id: 1},
        {task: 'HTML stuff', notes: 'lambda stuff', complete: 'true', project_id: 2},
        {task: 'javascript stuff', notes: 'lambda stuff', complete: 'true', project_id: 2},
        {task: 'python stuff', notes: 'lambda backend stuff', complete: 'false', project_id: 2},
        {task: 'become the boss', notes: 'work harder', complete: 'false', project_id: 3},
      ]);
    });
};
