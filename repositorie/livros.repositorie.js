import Livro from "../models/livro.model.js";

async function insertLivro(livro) {
  //cria um livro no banco de dados SQL utilizando sequelize
  try {
    return await Livro.create(livro);
  } catch (err) {
    throw err;
  }
}

async function getLivros() {
  //retorna todos os livros do banco de dados
  try {
    return await Livro.findAll({
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
async function getLivroId(id) {
  //retorna um livro escolhido pelo id
  try {
    return await Livro.findByPk(id, {
      attributes: [
        "autor_id",
        "nome",
        "valor"
      ]
    });
  } catch (err) {
    throw err;
  }
}

async function updateLivro(autor) {
  //atualiza um livro escolhido pelo id
  try {
    await Livro.update(autor, {
      where: { autor_id: autor.autor_id },
    });

    return await getlivroId(livro.livro_id);
  } catch (err) {
    throw err;
  }
}
async function deleteLivro(id) {
  //deleta um livro escolhido pelo id
  try {
    await Livro.destroy({
      where: {
        livro_id: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function getLivroByAutor(autor_id){
    try {
        await Livro.findAll({
            where:{
                autor_id: autor_id
            }
        })
    } catch (err) {
        throw(err)
    }
}

export default {
  //exporta todas as funções
  insertLivro,
  getLivros,
  getLivroId,
  updateLivro,
  deleteLivro,
  getLivroByAutor
};