const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

// Middleware para liberar CORS para todas as origens
app.use(cors());

// Middleware para interpretar JSON e URL-encoded
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Rotas
app.get('/', (req, res) => {
    res.send('Servidor rodando!');
});
const { PrismaClient } = require('@prisma/client');

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ status: 400, error: 'Dados incompletos!' });
    }
    try {
        // Busca usuário no banco pelo e-mail
        const user = await prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            return res.status(401).json({ status: 401, error: 'Usuário ou senha inválidos!' });
        }
        // Verifica se a senha está correta
        const senhaCorreta = password === user.senha;
        if (!senhaCorreta) {
            return res.status(401).json({ status: 401, error: 'Usuário ou senha inválidos!' });
        }
        // Remove a senha da resposta por segurança
        const { senha, ...userData } = user;
        res.status(200).json({
            status: 200,
            message: 'Login realizado com sucesso!',
            user: userData,
        });
    } catch (error) {
        res.status(500).json({ status: 500, error: 'Erro interno no servidor' });
    }
});

// Rotas Prisma

// Criar usuário
app.post('/users', async (req, res) => {
    const { username, email, senha } = req.body;
    try {
        const user = await prisma.user.create({ data: { username, email, senha } });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar usuário', details: error.message });
    }
});

// Listar usuários
app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany({ include: { dispositivos: true } });
    res.json(users);
});

// Criar dispositivo
app.post('/dispositivos', async (req, res) => {
    const { nome, userId } = req.body;
    try {
        const dispositivo = await prisma.dispositivo.create({
            data: { nome, userId }
        });
        res.status(201).json(dispositivo);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar dispositivo', details: error.message });
    }
});

// Listar dispositivos
app.get('/dispositivos', async (req, res) => {
    const dispositivos = await prisma.dispositivo.findMany({
        include: { user: true, config: true, historico: true }
    });
    res.json(dispositivos);
});

// Buscar dispositivo por ID
app.get('/dispositivos/:id', async (req, res) => {
    const dispositivo = await prisma.dispositivo.findUnique({
        where: { id: Number(req.params.id) },
        include: { user: true, config: true, historico: true }
    });
    if (!dispositivo) return res.status(404).json({ error: 'Dispositivo não encontrado' });
    res.json(dispositivo);
});

// Atualizar dispositivo
app.put('/dispositivos/:id', async (req, res) => {
    const { nome } = req.body;
    try {
        const dispositivo = await prisma.dispositivo.update({
            where: { id: Number(req.params.id) },
            data: { nome }
        });
        res.json(dispositivo);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao atualizar dispositivo' });
    }
});

// Deletar dispositivo
app.delete('/dispositivos/:id', async (req, res) => {
    try {
        await prisma.dispositivo.delete({ where: { id: Number(req.params.id) } });
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: 'Erro ao deletar dispositivo' });
    }
});


// Criar configuração para um dispositivo
app.post('/config', async (req, res) => {
    const { dispositivosId, temperatura, umidade, sensor } = req.body;
    try {
        const config = await prisma.config.create({
            data: { dispositivosId, temperatura, umidade, sensor }
        });
        res.status(201).json(config);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar configuração' });
    }
});

// Atualizar configuração
app.put('/config/:id', async (req, res) => {
    const { temperatura, umidade, sensor } = req.body;
    try {
        const config = await prisma.config.update({
            where: { id: Number(req.params.id) },
            data: { temperatura, umidade, sensor }
        });
        res.json(config);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao atualizar configuração' });
    }
});

// Buscar configuração por ID
app.get('/config/:id', async (req, res) => {
    const config = await prisma.config.findUnique({
        where: { id: Number(req.params.id) },
    });
    if (!config) return res.status(404).json({ error: 'Configuração não encontrada' });
    res.json(config);
});


// Inicializa o servidor local
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
