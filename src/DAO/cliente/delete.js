const {conexao} = require('../conexao.js')

async function deletarCategoria(id) {
    const sql = `DELETE FROM tbl_categoria WHERE id = ?`
    const conn = await conexao()
    try {
        const [results] = await conn.query(sql, [id])

        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

async function deletarProduto(codigo) {
    const sql = `DELETE FROM tbl_produtos WHERE codigo = ?`
    const conn = await conexao()
    try {
        const [results] = await conn.query(sql, [codigo])
        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

async function deletarStatus(id) {
    const sql = `DELETE FROM tbl_status WHERE id = ?`
    const conn = await conexao()
    try {
        const [results] = await conn.query(sql, [id])
        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

async function deletarEndereco(id) {
    const sql = `DELETE FROM tbl_endereco WHERE id = ?`
    const conn = await conexao()
    try {
        const [results] = await conn.query(sql, [id])
        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

async function deletarCliente(codigo) {
    const sql = `DELETE FROM tbl_cliente WHERE codigo = ?`
    const conn = await conexao()
    try {
        const [results] = await conn.query(sql, [codigo])
        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

async function deletarPedido(numero) {
    const sql = `DELETE FROM tbl_pedido WHERE numero = ?`
    const conn = await conexao()
    try {
        const [results] = await conn.query(sql, [numero])
        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

async function deletarItemPedido(id, id_pedido, id_produto) {
    const sql = `DELETE FROM tbl_itempedido WHERE id = ? AND id_pedido = ? AND id_produto = ?`
    const conn = await conexao()
    try {
        const [results] = await conn.query(sql, [id, id_pedido, id_produto])
        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

module.exports = {
    deletarCategoria,
    deletarProduto,
    deletarStatus,
    deletarEndereco,
    deletarCliente,
    deletarPedido,
    deletarItemPedido
}