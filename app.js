const express = require('express')
const app = express()
//Se crea la constante connection para traer los datos del archivo knexfile.js, la seccion de development
// la cual utilizamos (colocamos) en la constante db
const connection = require('./knexfile')['development']
// Se crea la constante db que nos trae la conexion de la tabla
const db = require('knex')(connection)

app.use(express.json()),

    app.get('/', (req, res) => {
        res.json({
            saludo: "Hello world"
        })
    })

// hacemos el get de la tabla tasks y la podemos visualizar  en el localhost
app.get('/tasks', (req, res) => {
    db('tasks').then((tasks) => {
        res.json(tasks)
    })
})

// hacemos un get con el id para traer de la  tabla solo la fila con el id que deseamos (ej: http://localhost:3000/tasks/3)
app.get('/tasks/:id', (req, res) => {
    const { id } = req.params
    db('tasks')
        .where({ task_id: id })
        .then((tasks) => {
            res.json(tasks)
        })
})

// insertar datos a la base de datos
// app.post('/tasks', (req, res) => {
//     db('tasks').insert({
//         title: "otro",
//         description: "alguna cosa",
//         done: false
//     }).then((tasks) => {
//         res.json(tasks)
//     })
// })

// insertar datos desde el Body en postman
app.post('/tasks', (req, res) => {
    const toCreate = req.body
    db('tasks').insert(toCreate).then((tasks) => {
        res.json(tasks)
    })
})

// modificar un campo en la base de datos
app.put('/tasks/:id', (req, res) => {
    const { id } = req.params
    db('tasks')
        .where({ task_id: id })
        .update({ "done": true })
        .then((tasks) => {
            res.json(tasks)
        })
})

// modificar un campo en la base de datos desde el body
app.put('/tasks/:id', (req, res) => {
    const { id } = req.params
    const toEdit = req.body
    db('tasks')
        .where({ task_id: id })
        .update(toEdit)
        .then((tasks) => {
            res.json(tasks)
        })
})

//Para borrar
app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params
    db('tasks')
        .where({ task_id: id })
        .del()
        .then((tasks) => {
            res.json(tasks)
        })
})




app.listen(3000, () => {
    console.log("Running on port 3000")
})