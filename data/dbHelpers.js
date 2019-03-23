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
    
    getActions: () => {
        return db('actions')
    },

    addActions: (action) => {
        return db('actions')
        .insert(action)
    },

}