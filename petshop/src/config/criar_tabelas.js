import dotenv from "dotenv";
dotenv.config();
import client from "./database.js";

class Criar_Tabela {
  static async Animais() {
    console.log("Iniciando criação da tabela...");
    const consulta = `create table if not exists animais(
            id_animal serial primary key,
            nome varchar(50) not null,
            especie varchar(30) not null,
            raca varchar(50) not null,
            idade integer not null,
            peso numeric(5,2) not null
        );`;
    try {
      await client.query(consulta);
      return console.log("Tabela Animal criada com sucesso!");
    } catch (error) {
      console.error("Erro ao criar tabela:", error.message);
    }
  }
}

Criar_Tabela.Animais().then(() => {
  console.log("Finalizou tentativa de criar tabela.");
});

export default Criar_Tabela;
