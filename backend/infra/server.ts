// infra/server.ts

// 1) Carrega as variáveis de ambiente
import "dotenv/config";

// 2) Importa a instância do Express criada em src/app
//    — em dev com ts-node-esm você pode omitir a extensão `.ts`
//    — após build (tsc → dist/) você importará o arquivo .js compilado
import app from "../src/app.ts";

// 3) Seta a porta (pode vir do .env ou 3000 como fallback)
const PORT = process.env.PORT || 3000;

// 4) Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
