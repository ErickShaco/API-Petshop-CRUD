import AnimalModel from "../models/animal.model.js";

// Responsável por gerenciar as requisições relacionadas aos animais
export default class AnimalController {
  //Metodo estático para cadastrar um novo animal
  // Recebe os dados do animal via requisição e chama o método de cadastro do modelo
  static async cadastrar(req, res) {
    try {
      const { nome, especie, raca, idade, peso } = req.body;
      if (!nome || !especie || !raca || !idade || !peso) {
        return res.status(400).json({
          msg: "Todos os campos são obrigatorios",
        });
      }
      await AnimalModel.cadastrar(nome, especie, raca, idade, peso);
      res.status(201).json({
        msg: "Animal Cadastrado com Sucesso!",
      });
    } catch (error) {
      res.status(500).json({
        msg: "Erro Interno do Servidor! Tente Novamente mais Tarde",
        error: error.message,
      });
    }
  }
  // Método estático para editar um animal existente
  // Recebe os novos dados do animal via requisição e chama o método de edição do model
  static async editar(req, res) {
    try {
      const { nome, especie, raca, idade, peso } = req.body;
      const id = parseInt(req.params.id);
      await AnimalModel.editar(id, nome, especie, raca, idade, peso);
      res.status(200).json({
        msg: "Animal Atualizado com Sucesso!",
      });
    } catch (error) {
      res.status(500).json({
        msg: "Erro Interno do Servidor! Tente Novamento mais Tarde",
        error: error.message,
      });
    }
  }
  // Método estático para listar todos os animais
  // Chama o método de listagem do modelo e retorna a lista de animais
  static async listarTodos(req, res) {
    try {
      const animal = await AnimalModel.listarTodos();
      if (animal.length === 0)
        return res.status(404).json({
          msg: "Banco de dados vazio!",
        });
      res.status(200).json(animal);
    } catch (error) {
      res.status(500).json({
        msg: "Erro Interno do Servidor! Tente Novamento mais Tarde",
        error: error.message,
      });
    }
  }
  // Método estático para listar um animal por ID
  // Recebe o ID do animal via parâmetro e chama o método de listagem por ID do model
  static async listarPorId(req, res) {
    try {
      const id = parseInt(req.params.id);
      const animal = await AnimalModel.listarPorId(id);
      if (!animal) {
        return res.status(404).json({
          msg: "Animal não Encontrado!",
        });
      }
      res.status(200).json(animal);
    } catch (error) {
      res.status(500).json({
        msg: "Erro Interno do Servidor! Tente Novamento mais Tarde",
        error: error.message,
      });
    }
  }
  // Método estático para deletar todos os animais
  // Chama o método de delete do model
  static async deletarTodos(req, res) {
    try {
      await AnimalModel.deletarTodos();
      res.status(200).json({
        msg: "Todos os Animais foram Deletados!",
      });
    } catch (error) {
      res.status(500).json({
        msg: "Erro Interno do Servidor! Tente Novamento mais Tarde",
        error: error.message,
      });
    }
  }
  // Método estático para deletar um animal por ID
  // Recebe o ID do animal e chama o método de delete por ID do model
  static async deletarPorId(req, res) {
    try {
      const id = parseInt(req.params.id);
      const animal = await AnimalModel.deletarPorId(id);
      if (!animal) {
        res.status(404).json({
          msg: "Animal não Encontrado!",
        });
      }
      res.status(200).json({
        msg: "Animal Deletado com Sucesso!",
      });
    } catch (error) {
      res.status(500).json({
        msg: "Erro Interno do Servidor! Tente Novamento mais Tarde",
        error: error.message,
      });
    }
  }
}
