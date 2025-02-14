import { AppDataSource } from "../config/ormconfig"; // Importe a conexão do banco
import { User } from "../entities/user"; // Importe a entidade User

export class UserService {
  private userRepository = AppDataSource.getRepository(User);

  public async createUser(userData: {
    firstName: string;
    lastName: string;
    email: string;
  }) {
    try {
      // Cria a instância de User com os dados fornecidos
      const newUser = this.userRepository.create(userData);
      // Salva o novo usuário no banco de dados
      await this.userRepository.save(newUser);
      return newUser;
    } catch (error) {
      console.error("Erro ao criar o usuário:", error);
      throw error;
    }
  }

  public async getAllUsers() {
    return this.userRepository.find(); // Busca todos os usuários
  }
  public async getUserById(id: number) {
    try {
      return await this.userRepository.findOne({ where: { id } });
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      throw error;
    }
  }

  public async updateUser(
    id: number,
    userData: { firstName: string; lastName: string; email: string }
  ) {
    const user = await this.userRepository.findOne({ where: { id } }); // Busca o usuário pelo ID
    if (user) {
      user.firstName = userData.firstName;
      user.lastName = userData.lastName;
      user.email = userData.email;
      await this.userRepository.save(user); // Salva as alterações
      return user;
    }
    return null; // Retorna null se o usuário não for encontrado
  }

  public async deleteUser(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (user) {
      await this.userRepository.remove(user); // Deleta o usuário
      return true;
    }
    return false;
  }
}
