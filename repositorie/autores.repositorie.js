import Autor from "../models/autor.model.js";

async function insertAutor(autor) {
  //cria um autor no banco de dados SQL utilizando sequelize
  try {
    return await Autor.create(autor);
  } catch (err) {
    throw err;
  }
}

async function getAutors() {
  //retorna todos os autores do banco de dados
  try {
    return await Autor.findAll({
      attributes: [
        "autor_id",
        "nome",
        "email",
        "cpf",
        "telefone",
        "endereço",
      ]
    });
  } catch (err) {
    throw err;
  }
}
async function getAutorId(id) {
  //retorna um autor escolhido pelo id
  try {
    return await Autor.findByPk(id, {
      attributes: [
        "autor_id",
        "nome",
        "email",
        "telefone"
      ]
    });
  } catch (err) {
    throw err;
  }
}

async function updateAutor(autor) {
  //atualiza um autor escolhido pelo id
  try {
    await Autor.update(autor, {
      where: { autor_id: autor.autor_id },
    });

    return await getAutorId(autor.autor_id);
  } catch (err) {
    throw err;
  }
}
async function deleteAutor(id) {
  //deleta um autor escolhido pelo id
  try {
    await Autor.destroy({
      where: {
        autor_id: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

export default {
  //exporta todas as funções
  insertAutor,
  updateAutor,
  getAutors,
  deleteAutor,
  getAutorId,
};