import autoresService from "../services/autores.service.js";

function autorValido(autor) {
  return autor.nome && autor.email && autor.telefone;
}

async function createAutor(req, res, next) {
  try {
    let autor = req.body;

    if (!autorValido(autor)) {
      throw new Error("insira os dados do autor");
    }
    res.send(await autoresService.createAutor(autor));

    logger.info(`POST /autores ${JSON.stringify(autor)}`);
  } catch (err) {
    next(err);
  }
}

async function getAutor(req, res, next) {
  try {
    res.send(await autoresService.getAutor());
    logger.info("GET /autores");
  } catch (err) {
    next(err);
  }
}
async function getAutorId(req, res, next) {
  try {
    res.send(await autoresService.getAutorId(req.params.id));
    console.log(req.params.id);
    logger.info("GET /autores/:id");
  } catch (err) {
    next(err);
  }
}

async function deleteAutor(req, res, next) {
  try {
    res.send(await autoresService.deleteAutor(req.params.id));
    res.end();
    logger.info("DELETE /autores/:id");
  } catch (err) {
    next(err);
  }
}
async function updateAutor(req, res, next) {
  try {
    let autor = req.body;

    if (
      !autor.nome ||
      !autor.email ||
      !autor.telefone||
      !autor.autor_id
    ) {
      throw new Error("insira os dados corrretamente");
    }
    res.send(await autoresService.updateAutor(autor));

    logger.info(`PUT /autores ${JSON.stringify(autor)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createAutor,
  getAutor,
  getAutorId,
  deleteAutor,
  updateAutor,
};

