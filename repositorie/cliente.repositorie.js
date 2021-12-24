import Cliente from "../models/cliente.model.js";

async function insertCliente(cliente) {
  //cria um cliente no banco de dados SQL utilizando sequelize
  try {
    return await Cliente.create(cliente);
  } catch (err) {
    throw err;
  }
}

async function getClientes() {
  //retorna todos os clientes do banco de dados
  try {
    return await Cliente.findAll({
      attributes: [
        "cliente_id",
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
async function getClienteId(id) {
  //retorna um cliente escolhido pelo id
  try {
    return await Cliente.findByPk(id, {
      attributes: [
        "cliente_id",
        "nome",
        "email",
        "cpf",
        "telefone",
        "endereço",
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function updateCliente(cliente) {
  //atualiza um cliente escolhido pelo id
  try {
    await Cliente.update(cliente, {
      where: { cliente_id: cliente.cliente_id },
    });

    return await getClienteId(cliente.cliente_id);
  } catch (err) {
    throw err;
  }
}
async function deleteCliente(id) {
  //deleta um cliente escolhido pelo id
  try {
    await Cliente.destroy({
      where: {
        cliente_id: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

export default {
  //exporta todas as funções
  insertCliente,
  updateCliente,
  getClientes,
  deleteCliente,
  getClienteId,
};
