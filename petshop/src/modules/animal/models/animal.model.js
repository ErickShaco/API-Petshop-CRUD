import client from "../../../config/database.js";

// Responsável por gerenciar as operações relacionadas aos animais
export default class AnimalModel {
  // Método estático para cadastrar um novo animal
  // Recebe os dados do animal e adiciona ao array de animais
  static async cadastrar(nome, especie, raca, idade, peso) {
    const dados = [nome, especie, raca, idade, peso];
    const consulta = `insert into animais(nome, especie, raca, idade, peso) values($1,$2,$3,$4,$5) returning *`;
    const resultado = await client.query(consulta, dados);
    return resultado.rows;
  }
  // Método estático para editar um animal existente
  // Recebe o ID do animal e os novos dados, atualiza o animal no array
  static async editar(id_animal, nome, especie, raca, idade, peso) {
    const dados = [id_animal, nome, especie, raca, idade, peso];
    const consulta = `update animais set nome = $2, especie = $3, raca = $4, idade = $5, peso = $6 where id_animal = $1 returning *`;
    const resultado = await client.query(consulta, dados);
    return resultado.rows;
  }
  // Método estático para listar todos os animais
  // Retorna todos os animais do array
  static async listarTodos() {
    const consulta = `select * from animais`;
    const resultado = await client.query(consulta);
    return resultado.rows;
  }
  // Método estático para listar um animal por ID
  // Recebe o ID do animal e retorna o animal correspondente
  static async listarPorId(id_animal) {
    const dados = [id_animal];
    const consulta = `select * from animais where id_animal = $1`;
    const resultado = await client.query(consulta, dados);
    return resultado.rows;
  }
  // Método estático para deletar todos os animais
  // Limpa a Tabela de animais
  static async deletarTodos() {
    const consulta = `delete from animais returning *`;
    const resultado = await client.query(consulta);
    return resultado.rows;
  }
  // Método estático para deletar um animal por ID
  // Recebe o ID do animal e remove o animal correspondente da Tabela
  static async deletarPorId(id_animal) {
    const dados = [id_animal];
    const consulta = `delete from animais where id_animal = $1 returning *`;
    const resultado = await client.query(consulta, dados);
    return resultado.rows;
  }
}
