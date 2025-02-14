import { Request, Response } from "express";
import { UserService } from "../services/UserService"; // Importe o serviço

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService; // Instância do serviço recebida via construtor
  }

  public async getUsers(req: Request, res: Response): Promise<void> {
    const users = await this.userService.getAllUsers();
    res.json(users); // Retorna todos os usuários como JSON
  }
  public async getUserById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await this.userService.getUserById(Number(id));
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "Usuário não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar usuário", error });
    }
  }

  public async createUser(req: Request, res: Response): Promise<void> {
    const userData = req.body;
    const createdUser = await this.userService.createUser(userData);
    res.json(createdUser); // Retorna o usuário criado
  }
  public async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const result = await this.userService.deleteUser(Number(id));
      if (result) {
        res.json({ message: `Usuário com ID ${id} excluído com sucesso.` });
      } else {
        res
          .status(404)
          .json({ message: `Usuário com ID ${id} não encontrado.` });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao excluir usuário", error });
    }
  }
  public async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const userData = req.body;
      const updatedUser = await this.userService.updateUser(
        Number(id),
        userData
      );
      if (updatedUser) {
        res.json(updatedUser);
      } else {
        res
          .status(404)
          .json({ message: `Usuário com ID ${id} não encontrado.` });
      }
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar usuário", error });
    }
  }
}
