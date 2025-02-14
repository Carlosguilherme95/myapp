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
exports.UserService = void 0;
const ormconfig_1 = require("../config/ormconfig"); // Importe a conexão do banco
const user_1 = require("../entities/user"); // Importe a entidade User
class UserService {
    constructor() {
        this.userRepository = ormconfig_1.AppDataSource.getRepository(user_1.User);
    }
    createUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Cria a instância de User com os dados fornecidos
                const newUser = this.userRepository.create(userData);
                // Salva o novo usuário no banco de dados
                yield this.userRepository.save(newUser);
                return newUser;
            }
            catch (error) {
                console.error("Erro ao criar o usuário:", error);
                throw error;
            }
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.find(); // Busca todos os usuários
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.userRepository.findOne({ where: { id } });
            }
            catch (error) {
                console.error("Erro ao buscar usuário:", error);
                throw error;
            }
        });
    }
    updateUser(id, userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({ where: { id } }); // Busca o usuário pelo ID
            if (user) {
                user.firstName = userData.firstName;
                user.lastName = userData.lastName;
                user.email = userData.email;
                yield this.userRepository.save(user); // Salva as alterações
                return user;
            }
            return null; // Retorna null se o usuário não for encontrado
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({ where: { id } });
            if (user) {
                yield this.userRepository.remove(user); // Deleta o usuário
                return true;
            }
            return false;
        });
    }
}
exports.UserService = UserService;
