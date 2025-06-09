const {conexao} = require('../conexao.js')

async function incluirCategoria(infos){
    const data = [infos]
    const sql = `INSERT INTO tbl_categoria (id, nome) VALUES ?`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[data]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

async function incluirProduto(infos){
    const data = [infos]
    const sql = `INSERT INTO tbl_produtos (codigo,nome, id_categoria, preco) VALUES ?`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[data]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

async function incluirStatus(infos){
    const data = [infos]
    const sql = `INSERT INTO tbl_status (id, nome) VALUES ?`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[data]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

async function incluirEndereco(infos){
    const data = [infos]
    const sql = `INSERT INTO tbl_endereco (id, logradouro, cep, numero, bairro, cidade) VALUES ?`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[data]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

async function incluirCliente(infos){
    const data = [infos]
    const sql = `INSERT INTO tbl_cliente (codigo, nome, telefone, limite, id_endereco, id_status) VALUES ?`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[data]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

async function incluirPedido(infos){
    const data = [infos]
    const sql = `INSERT INTO tbl_pedido (numero, data_elaboracao, cliente_id) VALUES ?`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[data]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

async function incluirItemPedido(infos){
    const data = [infos]
    const sql = `INSERT INTO tbl_itempedido (id, id_pedido, id_produto, qnt) VALUES ?`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[data]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

module.exports = {
  incluirCategoria,
  incluirProduto,
  incluirStatus,
  incluirEndereco,
  incluirCliente,
  incluirPedido,
  incluirItemPedido
}