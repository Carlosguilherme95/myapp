import { DataSource } from "typeorm";
import { User } from "../entities/user";  // Exemplo de uma entidade

export const AppDataSource = new DataSource({
  type: "mysql", // ou "postgres" ou "sqlite", dependendo do seu banco de dados
  host: "localhost",
  port: 3306, // ou a porta do seu banco
  username: "root",  // seu usuário do banco
  password: "1234",  // sua senha do banco
  database: "meubanco", // nome do banco de dados
  synchronize: true, // sincronizar o banco (use com cautela em produção)
  logging: true,
  entities: [User], // adicione suas entidades aqui
  migrations: [], // adicione migrações quando necessário
  subscribers: [],
});
