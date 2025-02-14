"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ormconfig_1 = require("../config/ormconfig"); // Caminho correto para o seu arquivo de configuração
const user_1 = require("../entities/user");
function testarConexao() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Tenta se conectar ao banco de dados
            yield ormconfig_1.AppDataSource.initialize();
            console.log("Conexão com o banco de dados bem-sucedida!");
            // Realize uma consulta simples para testar
            const usuarios = yield ormconfig_1.AppDataSource.getRepository(user_1.User).find();
            console.log("Usuários no banco de dados:", usuarios);
        }
        catch (error) {
            console.error("Erro ao conectar ao banco de dados:", error);
        }
    });
}
// Executando a função de teste
testarConexao();
