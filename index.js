const express = require('express')
const env = require('dotenv')

const { buscarCategorias, buscarProdutos, buscarStatus, buscarEnderecos, buscarClientes, buscarPedidos, buscarItensPedidos } = require('./src/DAO/cliente/buscar.js')
const { incluirCategoria, incluirProduto, incluirStatus, incluirEndereco, incluirCliente, incluirPedido, incluirItemPedido } = require("./src/DAO/cliente/inserir.js")
const { conexao, closeConexao, testarConexao } = require('./src/DAO/conexao.js')

const app = express()
env.config()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.get('/empresa_produtos_limpeza/v1', (req, res) => {
    let respInicial = {
        msg: "Aplicação Funcionando"
    }
    res.json(respInicial)
})

// Buscar

app.get('/empresa_produtos_limpeza/v1/categorias', async (req, res) => {
    let categorias = await buscarCategorias()
    res.json(categorias)
})

app.get('/empresa_produtos_limpeza/v1/produtos', async (req, res) => {
    let produtos = await buscarProdutos()
    res.json(produtos)
})

app.get('/empresa_produtos_limpeza/v1/status', async (req, res) => {
    let status = await buscarStatus()
    res.json(status)
})

app.get('/empresa_produtos_limpeza/v1/enderecos', async (req, res) => {
    let endereco = await buscarEnderecos()
    res.json(endereco)
})

app.get('/empresa_produtos_limpeza/v1/clientes', async (req, res) => {
    let clientes = await buscarClientes()
    res.json(clientes)
})

app.get('/empresa_produtos_limpeza/v1/pedidos', async (req, res) => {
    let pedidos = await buscarPedidos()
    res.json(pedidos)
})

app.get('/empresa_produtos_limpeza/v1/itensPedido', async (req, res) => {
    let itemPedido = await buscarItensPedidos()
    res.json(itemPedido)
})

// Incluir

app.post('/empresa_produtos_limpeza/v1/categoria', async (req, res) => {
    let { id, nome } = req.body
    const infos = [id, nome]
    let result = await incluirCategoria(infos)
    res.json(result)
})

app.post('/empresa_produtos_limpeza/v1/produto', async (req, res) => {
    let { codigo, nome, id_categoria, preco } = req.body
    const infos = [codigo, nome, id_categoria, preco]
    let result = await incluirProduto(infos)
    res.json(result)
})

app.post('/empresa_produtos_limpeza/v1/status', async (req, res) => {
    let { id, nome } = req.body
    const infos = [id, nome]
    let result = await incluirStatus(infos)
    res.json(result)
})

app.post('/empresa_produtos_limpeza/v1/endereco', async (req, res) => {
    let { id, logradouro, cep, numero, bairro, cidade } = req.body
    const infos = [id, logradouro, cep, numero, bairro, cidade]
    let result = await incluirEndereco(infos)
    res.json(result)
})

app.post('/empresa_produtos_limpeza/v1/cliente', async (req, res) => {
    let { codigo, nome, limite, telefone, id_endereco, id_status } = req.body
    const infos = [codigo, nome, telefone, limite, id_endereco, id_status]
    let result = await incluirCliente(infos)
    res.json(result)
})

app.post('/empresa_produtos_limpeza/v1/pedido', async (req, res) => {
    let { numero, data_elaboracao, cliente_id } = req.body
    const infos = [numero, data_elaboracao, cliente_id]
    let result = await incluirPedido(infos)
    res.json(result)
})

app.post('/empresa_produtos_limpeza/v1/itemPedido', async (req, res) => {
    let { id, id_pedido, id_produto, qnt } = req.body
    const infos = [id, id_pedido, id_produto, qnt]
    let result = await incluirItemPedido(infos)
    res.json(result)
})

// Testar Conexão

app.listen(process.env.PORTA, () => {
    console.log(`Operando na porta ${process.env.PORTA}`),
        testarConexao(conexao())
})