import { AppDataSource } from "../config/ormconfig";  // Caminho correto para o seu arquivo de configuração
import { User } from "../entities/user";
async function testarConexao() {
  try {
    // Tenta se conectar ao banco de dados
    await AppDataSource.initialize();
    console.log("Conexão com o banco de dados bem-sucedida!");

    // Realize uma consulta simples para testar
    const usuarios = await AppDataSource.getRepository(User).find();
    console.log("Usuários no banco de dados:", usuarios);
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  }
}

// Executando a função de teste
testarConexao();
