import animais from "../../../config/database.js";

// Responsável por gerenciar as operações relacionadas aos animais
export default class AnimalModel {
  // Método estático para cadastrar um novo animal
  // Recebe os dados do animal e adiciona ao array de animais
  static cadastrar(id, nome, especie, raca, idade, peso) {
    animais.push({
      id,
      nome,
      especie,
      raca,
      idade,
      peso,
    });
  }
  // Método estático para editar um animal existente
  // Recebe o ID do animal e os novos dados, atualiza o animal no array
  static editar(id, novoNome, novaEspecie, novaRaca, novaIdade, novoPeso) {
    const animal = animais.find((animal) => animal.id === id);
    animal.nome = novoNome || animal.nome;
    animal.especie = novaEspecie || animal.especie;
    animal.raca = novaRaca || animal.raca;
    animal.idade = novaIdade || animal.idade;
    animal.peso = novoPeso || animal.peso;
    return animal;
  }
  // Método estático para listar todos os animais
  // Retorna todos os animais do array
  static listarTodos() {
    const animal = animais.map((animal) => animal);
    return animal;
  }
  // Método estático para listar um animal por ID
  // Recebe o ID do animal e retorna o animal correspondente
  static listarPorId(id) {
    const animal = animais.find((animal) => animal.id === id);
    return animal;
  }
  // Método estático para deletar todos os animais
  // Limpa o array de animais
  static deletarTodos() {
    animais.length = 0;
    return true;
  }
  // Método estático para deletar um animal por ID
  // Recebe o ID do animal e remove o animal correspondente do array
  static deletarPorId(id) {
    const animal = animais.findIndex((animal) => animal.id === id);
    if (animal === -1) {
      return null;
    }
    animais.splice(animal, 1);
    return true;
  }
}
