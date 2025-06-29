# ConfortTemp

## Visão Geral
O ConfortTemp é um sistema completo para monitoramento e controle de dispositivos de climatização, permitindo que usuários cadastrem dispositivos, visualizem dados de temperatura/umidade, configurem limites e ativem/desativem funções de climatização. O sistema é composto por um backend (Node.js/Express/Prisma) e um frontend (React + Vite + Tailwind).

---

## Backend (API)

### Tecnologias
- Node.js + Express
- Prisma ORM (banco relacional)
- JWT para autenticação
- Dotenv, CORS, Bcrypt

### Estrutura de Pastas
- `src/` - Código principal
  - `controllers/` - Lógica das rotas
  - `services/` - Regras de negócio e acesso ao banco
  - `routes/` - Definição das rotas da API
  - `utils/` - Utilitários (ex: integração com API de clima)
- `infra/` - Inicialização do servidor e middlewares
- `prisma/` - Migrations e schema do banco

### Principais Rotas da API
Todas as rotas estão sob `/api`.

#### Autenticação
- `POST /api/cadastrar` — Cria um novo usuário
- `POST /api/login` — Realiza login e retorna token JWT

#### Usuários
- `GET /api/users` — Lista todos os usuários
- `GET /api/users/:id` — Busca usuário por ID
- `PUT /api/users/:id` — Atualiza dados do usuário (nome, email ou senha)
- `PUT /api/users/climatizacao/:id` — Atualiza valor de climatização do usuário
- `DELETE /api/users/climatizacao/:id` — Desativa climatização do usuário

#### Dispositivos
- `POST /api/dispositivos` — Cria um novo dispositivo vinculado a um usuário
- `GET /api/dispositivos` — Lista todos os dispositivos ativos
- `GET /api/dispositivos/:id` — Busca dispositivo por ID
- `PUT /api/dispositivos/:id` — Atualiza configurações do dispositivo (nome, limites)
- `DELETE /api/dispositivos/:id` — Remove (desativa) um dispositivo
- `GET /api/user/:id/dispositivos` — Lista dispositivos de um usuário

#### Configurações
- `POST /api/config` — Cria configuração para dispositivo
- `GET /api/config/:id` — Busca configuração por ID

#### Clima
- `GET /api/clima/:lat/:long` — Retorna dados de clima (OpenWeatherMap) para latitude/longitude

### Autenticação
- Rotas protegidas usam JWT no header `Authorization: Bearer <token>`
- Middleware `authMiddleware` valida o token

### Exemplo de Fluxo
1. Usuário se cadastra (`/cadastrar`)
2. Faz login (`/login`) e recebe token
3. Usa token para acessar rotas protegidas (ex: criar dispositivo, atualizar dados)
4. Pode cadastrar dispositivos, configurar limites, ativar/desativar climatização, etc.

---

## Frontend

### Tecnologias
- React + Vite
- TailwindCSS
- Context API para autenticação e dispositivos
- React Router DOM
- Zod + React Hook Form para validação

### Estrutura de Telas
- **LoginPage**: Login do usuário
- **RegisterUserPage**: Cadastro de novos usuários (restrito ao admin)
- **DashBoard**: Tela principal, mostra dispositivos, clima atual, permite adicionar/remover dispositivos
- **DispositivoPage**: Configuração detalhada de um dispositivo (nome, limites de temperatura/movimento)
- **SettingsPage**: Atualização de dados do usuário (nome, email, senha)

### Componentes Principais
- **Header**: Navegação, logout, acesso a configurações
- **AdicionarDispositivo**: Modal/drawer para cadastrar novo dispositivo
- **Climatizador**: Permite definir temperatura desejada para o ambiente
- **LocationPermissionModal**: Solicita permissão de localização para mostrar clima
- **LoadingComponent**: Feedback de carregamento

### Fluxo de Uso
1. Usuário faz login
2. Permite acesso à localização para exibir clima atual
3. Visualiza dispositivos cadastrados, pode adicionar/remover
4. Acessa página de configuração de cada dispositivo para alterar nome/limites
5. Pode ativar/desativar climatização e definir temperatura desejada
6. Admin pode cadastrar novos usuários

### Integração com Backend
- Todas as ações (login, cadastro, CRUD de dispositivos, atualização de usuário, clima) são feitas via chamadas à API descrita acima.
- O token JWT é salvo no localStorage e enviado automaticamente nas requisições protegidas.

---

## Observações
- O sistema é responsivo e utiliza componentes modernos (Dialog, Drawer, Table, etc).
- O backend utiliza Prisma para garantir integridade dos dados e facilitar migrations.
- O frontend utiliza Context API para manter estado global de autenticação e dispositivos.

---

## Como rodar

### Backend
1. Instale dependências: `npm install`
2. Configure `.env` com variáveis do banco e JWT
3. Rode migrations: `npx prisma migrate dev`
4. Inicie: `npm run dev` ou `npm start`

### Frontend
1. Instale dependências: `npm install`
2. Configure `.env` com URL do backend
3. Inicie: `npm run dev`

---

## Licença
MIT