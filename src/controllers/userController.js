const pool = require('../settings/db');

const getStudents = (req, res) => {
    pool.query('SELECT * FROM users', (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result.rows);
        }
    })
}

const getStudentsById = (req, res) => {
    const bodyId = parseInt(req.params.id);
    pool.query('SELECT * FROM users WHERE id = $1', [bodyId], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result.rows[0]);
        }
    })
}


const insertStudent = (req, res) => {
    pool.query('INSERT INTO users (nome_completo, genero, email, telefone) VALUES ($1, $2, $3, $4)', 
    [req.body.nome_completo, req.body.genero, req.body.email, req.body.telefone], 
        (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send('Student created with success!');
        }
    })
}

const deleteStudent = (req, res) => {
    pool.query('DELETE FROM users WHERE id = $1', [req.params.id], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send('Student deleted with success!');
        }
    })
}



module.exports = {
    getStudents,
    getStudentsById,
    insertStudent,
    deleteStudent
}