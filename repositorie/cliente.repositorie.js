import db from "./db.js";
import Cliente from "../models/cliente.model.js";

async function insertCliente(cliente) {
  try {
    return await Cliente.create(cliente);
  } catch (err) {
    throw err;
  }
}

async function getClientes() {
  try {
    return await Cliente.findAll();
  } catch (err) {
    throw err;
  }
}
async function getClienteId(id) {
  try {
    return await Cliente.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function updateCliente(cliente) {
  try {
    await Cliente.update(cliente, { where: { cliente_id: cliente.cliente_id } });

    return await getClienteId(cliente.cliente_id);
  } catch (err) {
    throw err;
  }
}
async function deleteCliente(id) {
  try {
    await Cliente.destroy({
      where: {
        animal_id: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

export default {
  insertCliente,
  updateCliente,
  getClientes,
  deleteCliente,
  getClienteId,
};