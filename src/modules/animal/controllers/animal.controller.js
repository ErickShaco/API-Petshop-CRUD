import AnimalModel from "../models/animal.model.js";

// Responsável por gerenciar as requisições relacionadas aos animais
export default class AnimalController {
  //Metodo estático para cadastrar um novo animal
  // Recebe os dados do animal via requisição e chama o método de cadastro do modelo
  static cadastrar(req, res) {
    try {
      const { id, nome, especie, raca, idade, peso } = req.body;
      if (!id || !nome || !especie || !raca || !idade || !peso) {
        return res.status(400).json({
          msg: "Todos os campos são obrigatorios",
        });
      }
      AnimalModel.cadastrar(id, nome, especie, raca, idade, peso);
      res.status(201).json({
        msg: "Animal Cadastrado com Sucesso!",
      });
    } catch (error) {
      res.status(500).json({
        msg: "Erro Interno do Servidor! Tente Novamento mais Tarde",
        error: error.message,
      });
    }
  }
  // Método estático para editar um animal existente
  // Recebe os novos dados do animal via requisição e chama o método de edição do model
  static editar(req, res) {
    try {
      const { novoNome, novaEspecie, novaRaca, novaIdade, novoPeso } = req.body;
      const id = parseInt(req.params.id);
      AnimalModel.editar(
        id,
        novoNome,
        novaEspecie,
        novaRaca,
        novaIdade,
        novoPeso
      );
      res.status(200).json({
        msg: "Produto Atualizado com Sucesso!",
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
  static listarTodos(req, res) {
    try {
      const animal = AnimalModel.listarTodos();
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
  static listarPorId(req, res) {
    try {
      const id = parseInt(req.params.id);
      const animal = AnimalModel.listarPorId(id);
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
  static deletarTodos(req, res) {
    try {
      AnimalModel.deletarTodos();
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
  static deletarPorId(req, res) {
    try {
      const id = parseInt(req.params.id);
      const animal = AnimalModel.deletarPorId(id);
      if (animal === null) {
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
