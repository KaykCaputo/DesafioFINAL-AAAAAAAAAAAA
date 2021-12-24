import livrosService from "../services/livros.service.js";

function livroValido(livro) {
  return livro.nome && livro.valor && livro.autor_id;
}

async function createLivro(req, res, next) {
  try {
    let autor = req.body;

    if (!livroValido(autor)) {
      throw new Error("insira os dados do livro");
    }
    res.send(await livrosService.createLivro(livro));

    logger.info(`POST /livros ${JSON.stringify(livro)}`);
  } catch (err) {
    next(err);
  }
}

async function getLivro(req, res, next) {
  try {
    res.send(await livrosService.getLivro());
    logger.info("GET /livros");
  } catch (err) {
    next(err);
  }
}
async function getLivroId(req, res, next) {
  try {
    res.send(await livrosService.getLivroId(req.params.id));
    console.log(req.params.id);
    logger.info("GET /livros/:id");
  } catch (err) {
    next(err);
  }
}

async function deleteLivro(req, res, next) {
  try {
    res.send(await livrosService.deleteLivro(req.params.id));
    res.end();
    logger.info("DELETE /livros/:id");
  } catch (err) {
    next(err);
  }
}
async function updateLivro(req, res, next) {
  try {
    let livro = req.body;

    if (
      !livro.nome ||
      !livro.valor ||
      !livro.livro_id||
      !livro.autor_id
    ) {
      throw new Error("insira os dados corrretamente");
    }
    res.send(await livrosService.updateLivro(livro));

    logger.info(`PUT /livros ${JSON.stringify(livro)}`);
  } catch (err) {
    next(err);
  }
}
async function getLivroByAutor(req, res, next){
    try {
        let autor_id = req.params.autor_id;
        console.log(autor_id);
        res.send(livrosService.livroByAutor(autor_id));
        logger.info(`GET /livros/:autor_id`)
    } catch (err) {
        throw(err)
    }
}

export default {
  createLivro,
  updateLivro,
  deleteLivro,
  getLivro,
  getLivroByAutor,
  getLivroId
  
};

