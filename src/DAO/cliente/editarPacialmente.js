const {conexao} = require('../conexao.js')

async function editarParcialmenteCategorias(codigo, campo, valor) {
    const data = [valor, codigo]

    const colunasPermitidas = ['nome']
    if (!colunasPermitidas.includes(campo)) {
        throw new Error('Coluna inválida');
    }

    const sql = `UPDATE tbl_categoria SET ${campo} = ? WHERE id = ? ;`
    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, data);

        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

async function editarParcialmenteProdutos(codigo, campo, valor) {
    const data = [valor, codigo]

    const colunasPermitidas = ['nome', 'id_categoria', 'preco']
    if (!colunasPermitidas.includes(campo)) {
        throw new Error('Coluna inválida');
    }

    const sql = `UPDATE tbl_produtos SET ${campo} = ? WHERE codigo = ? ;`
    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, data);

        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

async function editarParcialmenteStatus(codigo, campo, valor) {
    const data = [valor, codigo]

    const colunasPermitidas = ['nome']
    if (!colunasPermitidas.includes(campo)) {
        throw new Error('Coluna inválida');
    }

    const sql = `UPDATE tbl_status SET ${campo} = ? WHERE id = ? ;`
    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, data);

        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

async function editarParcialmenteEnderecos(codigo, campo, valor) {
    const data = [valor, codigo]

    const colunasPermitidas = ['logradouro', 'cep', 'numero', 'bairro', 'cidade']
    if (!colunasPermitidas.includes(campo)) {
        throw new Error('Coluna inválida');
    }

    const sql = `UPDATE tbl_endereco SET ${campo} = ? WHERE id = ? ;`
    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, data);
        
        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

async function editarParcialmenteClientes(codigo, campo, valor) {
    const data = [valor, codigo]

    const colunasPermitidas = ['nome', 'email', 'telefone', 'id_endereco', 'id_status', 'limite']
    if (!colunasPermitidas.includes(campo)) {
        throw new Error('Coluna inválida');
    }

    const sql = `UPDATE tbl_cliente SET ${campo} = ? WHERE codigo = ? ;`
    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, data);

        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

async function editarParcialmentePedidos(codigo, campo, valor) {
    const data = [valor, codigo]

    const colunasPermitidas = ['data_elaboracao', 'cliente_id']
    if (!colunasPermitidas.includes(campo)) {
        throw new Error('Coluna inválida');
    }

    const sql = `UPDATE tbl_pedido SET ${campo} = ? WHERE numero = ? ;`
    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, data);

        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

async function editarParcialmenteItensPedidos(codigo, campo, valor) {
    const data = [valor, codigo]

    const colunasPermitidas = ['qnt']
    if (!colunasPermitidas.includes(campo)) {
        throw new Error('Coluna inválida');
    }

    const sql = `UPDATE tbl_itempedido SET ${campo} = ? WHERE id = ? ;`
    const conn = await conexao()

    try {
        const [results] = await conn.query(sql, data);
        await conn.end()
        return results
    } catch (err) {
        return err.message
    }
}

module.exports = {
  editarParcialmenteCategorias,
  editarParcialmenteProdutos,
  editarParcialmenteStatus,
  editarParcialmenteEnderecos,
  editarParcialmenteClientes,
  editarParcialmentePedidos,
  editarParcialmenteItensPedidos
}