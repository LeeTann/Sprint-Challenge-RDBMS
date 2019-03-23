const express = require('express')
const server = express()

const db = require('./data/dbHelpers')

server.use(express.json())

server.get('/api/projects', async (req, res) => {
    try {
        const projects = await db.getProjects()
        res.status(200).json(projects)
    } catch(error) {
        res.status(500).json(error)
    }
})

server.post('/api/projects', async (req, res) => {
    try {
        const project = await db.addProjects(req.body)
        res.status(201).json(project)
    } catch(error) {
        res.status(500).json(error)
    }
})

server.get('/api/actions', async (req, res) => {
    try {
        const actions = await db.getActions()
        res.status(200).json(actions)
    } catch(error) {
        res.status(500).json(error)
    }
})

server.post('/api/actions', async (req, res) => {
    try {
        const action = await db.addActions(req.body)
        res.status(201).json(action)
    } catch(error) {
        res.status(500).json(error)
    }
})

const port = process.env.PORT || 5000
server.listen(port, () => console.log(`\nrunning on port ${port}\n`))