const pool = require('../settings/db');

const getStudents = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.status(200).send(result.rows);
    } catch (err) {
        res.status(500).send(err);
    }
}

const getStudentsById = async (req, res) => {
    const bodyId = parseInt(req.params.id);
    try {
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [bodyId]);
        res.status(200).send(result.rows[0]);
    } catch (err) {
        res.status(500).send(err);
    }
}


const insertStudent = async (req, res) => {
    try {
        await pool.query('INSERT INTO users (nome_completo, genero, email, telefone) VALUES ($1, $2, $3, $4)', 
            [req.body.nome_completo, req.body.genero, req.body.email, req.body.telefone]);
        res.status(200).send('Student created with success!');
    } catch (err) {
        res.status(500).send(err);
    }
}

const deleteStudent = async (req, res) => {
    try {
        const user = await pool.query('SELECT * FROM users WHERE id = $1', [req.params.id]);
        if (user.rows.length === 0) {
            res.status(404).send('User not found');
        } else {
            await pool.query('DELETE FROM users WHERE id = $1', [req.params.id]);
            res.status(200).send('Student deleted with success!');
        }
    } catch (err) {
        res.status(500).send(err);
    }
}



module.exports = {
    getStudents,
    getStudentsById,
    insertStudent,
    deleteStudent
}