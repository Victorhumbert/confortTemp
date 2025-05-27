// src/utils/migratePasswords.ts
import { prisma } from "../prismaClient.ts";
import bcrypt from "bcrypt";

async function migrate() {
  console.log("🔄 Iniciando migração de senhas…");
  let users;
  try {
    users = await prisma.user.findMany({ select: { id: true, senha: true } });
    console.log(`👥 Achei ${users.length} usuários.`);
  } catch (err) {
    console.error("❌ Erro ao buscar usuários:", err);
    throw err;
  }

  for (const { id, senha } of users) {
    if (!senha?.startsWith("$2")) {
      try {
        const newHash = await bcrypt.hash(senha, 10);
        await prisma.user.update({ where: { id }, data: { senha: newHash } });
        console.log(`✅ Usuário ${id} migrado.`);
      } catch (err) {
        console.error(`❌ Falha ao migrar usuário ${id}:`, err);
      }
    } else {
      console.log(`🔒 Usuário ${id} já está com hash, pulando.`);
    }
  }
}

(async () => {
  try {
    await migrate();
  } catch (err: any) {
    // Imprime stack se existir, senão o próprio objeto
    if (err.stack) console.error("💥 Erro FATAL:\n", err.stack);
    else console.error("💥 Erro FATAL:", err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log("🔌 Prisma desconectado.");
  }
})();
