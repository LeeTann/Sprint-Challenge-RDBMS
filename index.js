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

server.get('/api/projects/:id', async (req, res) => {
    try {
        const id = req.params.id
        const project = await db.getProjectsbyId(id)
        if (project) {
            res.status(200).json(project)
        } else {
            res.status(404).json({ message: 'project not found'})
        }
    } catch(error) {
        res.status(500).json(error)
    }
})
server.get('/api/projects/:id/actions', async (req, res) => {
    try {
        const id = req.params.id
        db.getProjects(id).then(projects => {
            projects = projects[0];
            db.getActions(id).then(actions => {
                const project = Object.assign({}, projects, { actions: actions });
                res.json({ project });
            });
        })
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