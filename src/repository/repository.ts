import { User } from "../entities/user";
import { ModelUser } from "../models/ModelUser";

export class UserRepository {
  private users: User[] = [];

  public async findAll(): Promise<User[]> {
    return this.users;
  }
}
// private user: User colocar os usuários em um array e a função findAll retorna esses usuários
