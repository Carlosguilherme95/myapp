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
exports.UserController = void 0;
class UserController {
    constructor(userService) {
        this.userService = userService; // Instância do serviço recebida via construtor
    }
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userService.getAllUsers();
            res.json(users); // Retorna todos os usuários como JSON
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const user = yield this.userService.getUserById(Number(id));
                if (user) {
                    res.json(user);
                }
                else {
                    res.status(404).json({ message: "Usuário não encontrado" });
                }
            }
            catch (error) {
                res.status(500).json({ message: "Erro ao buscar usuário", error });
            }
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userData = req.body;
            const createdUser = yield this.userService.createUser(userData);
            res.json(createdUser); // Retorna o usuário criado
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield this.userService.deleteUser(Number(id));
                if (result) {
                    res.json({ message: `Usuário com ID ${id} excluído com sucesso.` });
                }
                else {
                    res
                        .status(404)
                        .json({ message: `Usuário com ID ${id} não encontrado.` });
                }
            }
            catch (error) {
                res.status(500).json({ message: "Erro ao excluir usuário", error });
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const userData = req.body;
                const updatedUser = yield this.userService.updateUser(Number(id), userData);
                if (updatedUser) {
                    res.json(updatedUser);
                }
                else {
                    res
                        .status(404)
                        .json({ message: `Usuário com ID ${id} não encontrado.` });
                }
            }
            catch (error) {
                res.status(500).json({ message: "Erro ao atualizar usuário", error });
            }
        });
    }
}
exports.UserController = UserController;
