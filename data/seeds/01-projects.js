
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Housework', description: 'house chores', completed: 'false'},
        {project_name: 'Homework', description: 'school stuff', completed: 'false'},
        {project_name: 'Workwork', description: 'work stuff', completed: 'false'},
      ]);
    });
};
