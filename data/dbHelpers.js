const knex = require('knex')
const dbConfig = require('../knexfile')

const db = knex(dbConfig.development)

module.exports = {

    getProjects: () => {
        return db('projects')
    },

    addProjects: (project) => {
        return db('projects')
        .insert(project)
    },

    getProjectsbyId: (id) => {
        return db('projects')
        .where({id: id})
    },

    getProjectsbyIdbyActions: (id) => {
        return db('actions')
        .join('projects', {'project.id': 'actions.project_id'})
        .where({'action.project_id': id})
    },
    
    getActions: () => {
        return db('actions')
    },

    addActions: (action) => {
        return db('actions')
        .insert(action)
    },

}