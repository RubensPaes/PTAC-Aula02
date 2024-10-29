import express from 'express';
import cors from 'cors';
import pkg from 'pg';
const { Pool } = pkg;

const app = express();
const port = 3000;

app.use(cors());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '12541254',
    port: 5432,
});

app.get('/', (req, res) => {
    res.send('Bem-vindo à API de Professores! Acesse /professores para ver a lista de professores.');
});

app.get('/profesores', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM profesores');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar professores');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});