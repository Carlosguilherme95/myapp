"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("../entities/user"); // Exemplo de uma entidade
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql", // ou "postgres" ou "sqlite", dependendo do seu banco de dados
    host: "localhost",
    port: 3306, // ou a porta do seu banco
    username: "root", // seu usuário do banco
    password: "1234", // sua senha do banco
    database: "meubanco", // nome do banco de dados
    synchronize: true, // sincronizar o banco (use com cautela em produção)
    logging: true,
    entities: [user_1.User], // adicione suas entidades aqui
    migrations: [], // adicione migrações quando necessário
    subscribers: [],
});
