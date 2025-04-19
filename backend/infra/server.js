import express from "express";
import cors from "cors";
import { PrismaClient } from "../prisma/app/generated/prisma/client/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import fetch from "node-fetch";
import dotenv from "dotenv";

// Carrega as variáveis de ambiente do arquivo .env
// dotenv.config({ path: ".env.local" }); // Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

// Middleware para liberar CORS para todas as origens
app.use(cors());

// Middleware para interpretar JSON e URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Inicializa o servidor local
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Rotas
app.get("/", (req, res) => {
  res.send("Servidor rodando!");
});

// Rotas Prisma
// Criar usuário com bcrypt
app.post("/api/cadastrar", async (req, res) => {
  const { username, email, senha } = req.body;

  try {
    // Verifica se o e-mail já existe
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: "E-mail já cadastrado!" });
    }

    // Gera o hash da senha
    const saltRounds = 10;
    const senhaHash = await bcrypt.hash(senha, saltRounds);

    // Cria o usuário com a senha criptografada
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        senha: senhaHash,
      },
    });

    // Remove a senha da resposta
    const { senha: _, ...userData } = newUser;

    res.status(201).json({
      status: 201,
      message: "Usuário criado com sucesso!",
      user: userData,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error: "Erro ao criar usuário",
      details: error.message,
    });
  }
});

// Login de usuário com bcrypt
app.post("/api/login", async (req, res) => {
  const { email, senha } = req.body;
  // Busca usuário no banco pelo e-mail
  const user = await prisma.user.findFirst({
    where: {
      email: email, // Converte o e-mail para minúsculas para comparação
    },
  });
  if (!user) {
    return res
      .status(401)
      .json({ status: 401, error: "Usuário ou senha inválidos!" });
  }
  const senhaCorreta = senha === user.senha;
  // const senhaCorreta = await bcrypt.compare(senha, user.senha);
  if (!senhaCorreta) {
    return res
      .status(401)
      .json({ status: 401, error: "Usuário ou senha inválidos!" });
  }
  // Verifica se a senha está correta
  try {
    // Remove a senha da resposta por segurança
    const { senha, ...userData } = user;

    // Gera um token JWT
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "24h",
    });

    res.status(200).json({
      status: 200,
      message: "Login realizado com sucesso!",
      user: userData,
      token: token,
    });
  } catch (error) {
    res.status(500).json({ status: 500, error: "Erro interno no servidor" });
  }
});

// Criar usuário
app.post("/api/users", async (req, res) => {
  const { username, email, senha } = req.body;
  try {
    const user = await prisma.user.create({ data: { username, email, senha } });
    res.status(201).json(user);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Erro ao criar usuário", details: error.message });
  }
});

// Listar usuários
app.get("/api/users", async (req, res) => {
  const users = await prisma.user.findMany({ include: { dispositivos: true } });
  res.json(users);
});

// Criar dispositivo
app.post("/api/dispositivos", async (req, res) => {
  const { nome, userId } = req.body;
  try {
    const dispositivo = await prisma.dispositivo.create({
      data: { nome, userId },
    });
    res.status(201).json(dispositivo);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Erro ao criar dispositivo", details: error.message });
  }
});

// Listar dispositivos
app.get("/api/dispositivos", async (req, res) => {
  const dispositivos = await prisma.dispositivo.findMany({
    include: { user: true, config: true, historico: true },
  });
  res.json(dispositivos);
});

// Listar dispositivos de um usuário específico
app.get("/api/user/:id/dispositivos", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const dispositivos = await prisma.dispositivo.findMany({
    where: {
      userId: +id,
    },
    include: { user: true, config: true, historico: true },
  });
  res.json(dispositivos);
});

// Buscar dispositivo por ID
app.get("/api/dispositivos/:id", async (req, res) => {
  const dispositivo = await prisma.dispositivo.findUnique({
    where: { id: Number(req.params.id) },
    include: { user: true, config: true, historico: true },
  });
  if (!dispositivo)
    return res.status(404).json({ error: "Dispositivo não encontrado" });
  res.json(dispositivo);
});

// Atualizar dispositivo
app.put("/api/dispositivos/:id", async (req, res) => {
  const { temperatura } = req.body;
  const id = req.params.id;
  try {
    const dispositivo = await prisma.config.update({
      where: {
        dispositivosId: Number(id),
      },
      data: {
        temperatura: temperatura,
        updatedAt: new Date(),
      },
    });
    console.log("DISPOSITIVO", dispositivo);
    console.log("TEMP", temperatura);
    console.log("DADOS ATUALIZADOS");
    res
      .status(200)
      .json({ data: dispositivo, message: "Dados atualizados com sucesso!" });
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar dispositivo" });
  }
});

// Deletar dispositivo
app.delete("/api/dispositivos/:id", async (req, res) => {
  try {
    await prisma.dispositivo.delete({ where: { id: Number(req.params.id) } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: "Erro ao deletar dispositivo" });
  }
});

// Criar configuração para um dispositivo
app.post("/api/config", async (req, res) => {
  const { dispositivosId, temperatura, umidade, sensor } = req.body;
  try {
    const config = await prisma.config.create({
      data: { dispositivosId, temperatura, umidade, sensor },
    });
    res.status(201).json(config);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar configuração" });
  }
});

// Atualizar configuração
app.put("/api/config/:id", async (req, res) => {
  const { temperatura, umidade, sensor } = req.body;
  try {
    const config = await prisma.config.update({
      where: { id: Number(req.params.id) },
      data: { temperatura, umidade, sensor },
    });
    res.json(config);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar configuração" });
  }
});

// Buscar configuração por ID
app.get("/api/config/:id", async (req, res) => {
  const config = await prisma.config.findUnique({
    where: { id: Number(req.params.id) },
  });
  if (!config)
    return res.status(404).json({ error: "Configuração não encontrada" });
  res.json(config);
});

// Pegar Clima Atual
app.get("/api/clima/:lat/:long", async (req, res) => {
  const { lat, long } = req.params;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=pt_br&appid=${process.env.CLIMA_API_KEY}`
    );
    res.status(200).json(await response.json());
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar clima" });
  }
});
