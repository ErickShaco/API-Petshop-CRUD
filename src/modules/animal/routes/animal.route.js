import express from "express";
import AnimalController from "../controllers/animal.controller.js";

const route = express.Router();
// Definindo as rotas para o CRUD de produtos
// As rotas são definidas com os métodos HTTP correspondentes

// Rota para listar todos os Animais
route.get("/animais", AnimalController.listarTodos);

// Rota para listar um Animal pelo id
route.get("/animais/:id", AnimalController.listarPorId);

// Rota para cadastrar um novo Animal
route.post("/animais/cadastrar", AnimalController.cadastrar);

// Rota para editar um Animal
route.patch("/animais/atualizar/:id", AnimalController.editar);

// Rota para deletar todos os Animais
route.delete("/animais/deletar", AnimalController.deletarTodos);

// Rota para deletar um Animal pelo id
route.delete("/animais/deletar/:id", AnimalController.deletarPorId);


export default route;