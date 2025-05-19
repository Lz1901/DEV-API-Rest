const express = require('express')
const { buscarClientes, buscarProdutos, buscarPedidos } = require('./src/DAO/cliente/buscarClientes.js')
const app = express()
const {conexao, closeConexao, testarConexao} = require('./src/DAO/conexao.js')

app.get('/empresa_produtos_limpeza/v1', (req, res) => {
    let respInicial = {
        msg: "Aplicação Funcionando"
    }
    res.json(respInicial)
})

app.get('/empresa_produtos_limpeza/v1/clientes', async (req, res) =>{
    let clientes = await buscarClientes()
    res.json(clientes)
})

app.get('/empresa_produtos_limpeza/v1/produtos', async (req, res) =>{
    let produtos = await buscarProdutos()
    res.json(produtos)
})

app.get('/empresa_produtos_limpeza/v1/pedidos', async (req, res) =>{
    let pedidos = await buscarPedidos()
    res.json(pedidos)
})

const porta = 3000

app.listen(porta, () =>{
    console.log("Operando na porta " + porta),
    testarConexao()
})