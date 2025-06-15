const { conexao } = require('../conexao.js')

async function editarCompletamenteCategorias(infos, id) {

    const sql = `UPDATE tbl_categoria SET nome = ? WHERE id = ?;`
    const conn = await conexao()
    
    try {
        const [results] = await conn.query(sql, [...infos, id])

        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

async function editarCompletamenteProdutos(infos, codigo) {

    const sql = `UPDATE tbl_produtos SET nome = ?, id_categoria = ?, preco = ? WHERE codigo = ?;`
    const conn = await conexao()
    
    try {
        const [results] = await conn.query(sql, [...infos, codigo])

        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

async function editarCompletamenteStatus(infos, id) {
    const sql = `UPDATE tbl_status SET nome = ? WHERE id = ?;`
    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, [...infos, id])

        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

async function editarCompletamenteEnderecos(infos, id) {

    const sql = `UPDATE tbl_endereco SET logradouro = ?, cep = ?, numero = ?, bairro = ?, cidade = ? WHERE id = ?;`
    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, [...infos, id])

        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

async function editarCompletamenteClientes(infos, codigo) {

    const sql = `UPDATE tbl_cliente SET telefone = ?, nome = ?, limite = ?, id_endereco = ?, id_status = ? WHERE codigo = ?;`
    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, [...infos, codigo])

        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

async function editarCompletamentePedidos(infos, numero) {

    const sql = `UPDATE tbl_pedido SET data_elaboracao = ?, cliente_id = ? WHERE numero = ?;`
    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, [...infos, numero])

        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

async function editarCompletamenteItensPedidos(infos, id, id_pedido, id_produto) {

    const sql = `UPDATE tbl_itempedido SET qnt = ? WHERE id = ? AND id_pedido = ? AND id_produto = ?;`
    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, [...infos, id, id_pedido, id_produto])
        
        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

module.exports = {
    editarCompletamenteCategorias,
    editarCompletamenteProdutos,
    editarCompletamenteStatus,
    editarCompletamenteEnderecos,
    editarCompletamenteClientes,
    editarCompletamentePedidos,
    editarCompletamenteItensPedidos
}