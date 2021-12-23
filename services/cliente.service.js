import clienteRepositorie from "../repositorie/cliente.repositorie.js";

async function createCliente(cliente) {
  return await clienteRepositorie.insertCliente(cliente);
}
async function getCliente() {
  return await clienteRepositorie.getClientes();
}
async function getClienteId(id) {
  console.log(id);
  return await clienteRepositorie.getClienteId(id);
}
async function deleteClienteId(id) {
  await clienteRepositorie.deleteCliente(id);
}
async function updateCliente(cliente) {
  return await clienteRepositorie.updateCliente(cliente);
}
export default {
  createCliente,
  getCliente,
  getClienteId,
  deleteClienteId,
  updateCliente,
};
