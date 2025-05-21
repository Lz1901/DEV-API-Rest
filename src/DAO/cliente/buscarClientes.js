const { conexao } = require('../conexao.js')


async function buscarClientes() {
  const sql = `SELECT * FROM tbl_cliente;`

  const conn = await conexao()
  try {
    // Executar a consulta
    const [rows, fields] = await conn.query(sql);
    await conn.end()
    return rows
  } catch (err) {
    return err.message
  }
}

async function buscarProdutos() {
  const sql = `SELECT * FROM tbl_produtos;`

  const conn = await conexao()
  try {
    // Executar a consulta
    const [rows, fields] = await conn.query(sql);
    await conn.end()
    return rows
  } catch (err) {
    return err.message
  }
}

async function buscarPedidos() {
  const sql = `SELECT * FROM tbl_pedido;`

  const conn = await conexao()
  try {
    // Executar a consulta
    const [rows, fields] = await conn.query(sql);
    await conn.end()
    return rows
  } catch (err) {
    return err.message
  }
}

module.exports = {
  buscarClientes,
  buscarProdutos,
  buscarPedidos
}