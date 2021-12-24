import autorRepositorie from "../repositorie/autores.repositorie.js";

async function createAutor(autor) {
  return await autorRepositorie.insertAutor(autor);
}
async function getAutor() {
  return await autorRepositorie.getAutors();
}
async function getAutorId(id) {
  console.log(id);
  return await autorRepositorie.getAutorId(id);
}
async function deleteAutor(id) {
  await autorRepositorie.deleteAutor(id);
}
async function updateAutor(autor) {
  return await autorRepositorie.updateAutor(autor);
}
export default {
  createAutor,
  getAutor,
  getAutorId,
  deleteAutor,
  updateAutor
};