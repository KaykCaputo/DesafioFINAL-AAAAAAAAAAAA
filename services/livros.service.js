import livroRepositorie from "../repositorie/livros.repositorie.js";

async function createLivro(livro) {
  return await livroRepositorie.insertLivro(livro);
}
async function getLivro() {
  return await livroRepositorie.getLivros();
}
async function getLivroId(id) {
  console.log(id);
  return await livroRepositorie.getLivroId(id);
}
async function deleteLivro(id) {
  await livroRepositorie.deleteLivro(id);
}
async function updateLivro(livro) {
  return await livroRepositorie.updateLivro(livro);
}
async function livroByAutor(autor_id){
    return await livroRepositorie.getLivroByAutor(autor_id);
}
export default {
  getLivro,
  getLivroId,
  deleteLivro,
  updateLivro,
  createLivro,
  livroByAutor
};