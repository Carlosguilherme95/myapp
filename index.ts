import "reflect-metadata"; // Esse import é necessário para o TypeORM funcionar corretamente
import express from "express"; // Importa o Express
import * as bodyParser from "body-parser";
import { AppDataSource } from "./src/config/ormconfig"; // Importe o AppDataSource onde você configurou a conexão
import { UserController } from "./src/controllers/controller"; // Importe o controlador
import { UserService } from "./src/services/UserService"; // Importe o serviço

const app = express(); // Cria a instância do servidor Express
const port = 3000; // Define a porta para o servidor Express

// Inicializa a conexão com o banco de dados
AppDataSource.initialize()
  .then(() => {
    console.log("Conectado ao banco de dados!");

    // Instancia o serviço e o controlador
    const userService = new UserService();
    const userController = new UserController(userService);

    app.use(express.json()); // Para que possamos ler o corpo da requisição como JSON

    // Defina as rotas
    app.post("/users", (req, res) => userController.createUser(req, res)); // Rota POST
    app.get("/users", (req, res) => userController.getUsers(req, res)); // Rota GET
    app.get("/users/:id", (req, res) => userController.getUserById(req, res)); // Rota GET para um único usuário
    app.put("/users/:id", (req, res) => userController.updateUser(req, res));
    app.delete("/users/:id", (req, res) => userController.deleteUser(req, res));

    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error);
  });
