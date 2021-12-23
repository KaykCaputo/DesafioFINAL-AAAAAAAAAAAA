import clientesService from "../services/cliente.service.js";

function clientesValido(clientes) {
  return clientes.nome && clientes.senha && clientes.email && clientes.cpf && clientes.endereço && clientes.telefone;
}

async function createCliente(req, res, next) {
  try {
    let clientes = req.body;

    if (!clientesValido(clientes)) {
      throw new Error("insira os dados do seu cliente");
    }
    res.send(await clientesService.createCliente(clientes));

    logger.info(`POST /clientes ${JSON.stringify(clientes)}`);
  } catch (err) {
    next(err);
  }
}

async function getCliente(req, res, next) {
  try {
    res.send(await clientesService.getCliente());
    logger.info("GET /clientes");
  } catch (err) {
    next(err);
  }
}
async function getClienteId(req, res, next) {
  try {
    res.send(await clientesService.getClienteId(req.params.id));
    console.log(req.params.id);
    logger.info("GET /clientes/:id");
  } catch (err) {
    next(err);
  }
}

async function deleteCliente(req, res, next) {
  try {
    res.send(await clientesService.deleteClienteId(req.params.id));
    res.end();
    logger.info("DELETE /clientes/:id");
  } catch (err) {
    next(err);
  }
}
async function updateCliente(req, res, next) {
  try {
    let cliente = req.body;

    if (
      !cliente.nome ||
      !cliente.senha ||
      !cliente.email ||
      !cliente.cpf||
      !cliente.endereço||
      !cliente.telefone||
      !cliente.cliente_id
    ) {
      throw new Error("insira os dados corrretamente");
    }
    res.send(await clientesService.updateCliente(cliente));

    logger.info(`PUT /clientes ${JSON.stringify(cliente)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createCliente,
  getCliente,
  getClienteId,
  deleteCliente,
  updateCliente,
};

