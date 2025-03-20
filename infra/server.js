const express = require('express');
const cors = require('cors');

const app = express();

// Middleware para liberar CORS para todas as origens
app.use(cors());

// Middleware para interpretar JSON e URL-encoded
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Rotas
app.get('/', (req, res) => {
    res.send('Servidor rodando!');
});


app.post('/login', (req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(400).json({status: 404, error: 'Dados incompletos!'});
    }

    console.log(req.body);

    res.status(200).json({status: 200, message: 'Dados recebidos com sucesso!', dados: req.body});
});

app.post('/api/dados', (req, res) => {
    const {temperatura, umidade} = req.body;

    if (!temperatura || !umidade) {
        return res.status(400).json({status: 404, error: 'Dados incompletos!'});
    }

    console.log(req.body);

    res.status(200).json({status: 200, message: 'Dados recebidos com sucesso!', dados: req.body });
});



// Inicializa o servidor local
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
