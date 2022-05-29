import { criar_formularioDinamicamente } from './criarFormulario.js'
import { clientes } from './clientes.js'
import { produtos } from './produtos.js'

const liClientes = document.querySelector('#clientes')
const liProdutos = document.querySelector('#produtos')
const liPedidos = document.querySelector('#pedidos')
const conteudo = document.querySelector('#content')

// _____________________________ CLIENTES _____________________________//
liClientes.addEventListener('click', () => {
    criar_formularioDinamicamente(conteudo, 'formClientes')

    const inputCodigo = document.querySelector('#inputCodigo')
    const inputNome = document.querySelector('#inputNome')
    const inputDataCadastro = document.querySelector('#inputDataCadastro')
    const btnFechar = document.querySelector('#btnFechar')
    const btnAnterior = document.querySelector('#btnAnterior')
    const btnProximo = document.querySelector('#btnProximo')
    const btnNovo = document.querySelector('#btnNovo')
    const btnSalvar = document.querySelector('#btnSalvar')
    let cadastro = 0
    inputCodigo.value = clientes[cadastro].codCliente
    inputNome.value = clientes[cadastro].nomeCliente
    inputDataCadastro.value = clientes[cadastro].dataCadCli

    btnProximo.addEventListener('click', () => {
        if ((cadastro + 1) < clientes.length) {
            cadastro++
            inputCodigo.value = clientes[cadastro].codCliente
            inputNome.value = clientes[cadastro].nomeCliente
            inputDataCadastro.value = clientes[cadastro].dataCadCli
        } else {
            alert('Não há mais cadastros para mostrar')
        }
    }) // btnProximo

    btnAnterior.addEventListener('click', () => {
        if (cadastro > 0) {
            cadastro--
            inputCodigo.value = clientes[cadastro].codCliente
            inputNome.value = clientes[cadastro].nomeCliente
            inputDataCadastro.value = clientes[cadastro].dataCadCli
        } else {
            alert('Não há mais cadastros para mostrar')
        }
    }) // btnAnterior

    btnNovo.addEventListener('click', () => {
        inputCodigo.value = clientes.length + 1
        inputNome.value = ''
        inputDataCadastro.value = `${new Date().toLocaleDateString()}`
    }) // btnNovo

    btnSalvar.addEventListener('click', () => {
        if (!verificar_ClientesCadastrados(clientes)) {
            clientes.push({
                "codCliente": parseInt(inputCodigo.value),
                "nomeCliente": inputNome.value,
                "dataCadCli": inputDataCadastro.value
            })
            cadastro = 0
            inputCodigo.value = clientes[cadastro].codCliente
            inputNome.value = clientes[cadastro].nomeCliente
            inputDataCadastro.value = clientes[cadastro].dataCadCli
            alert('Cadastro realizado com sucesso')
        } else {
            alert('Não foi possível cadastrar o cliente')
        }

        function verificar_ClientesCadastrados(clientes) {
            for (let cliente of clientes) {
                if (parseInt(inputCodigo.value) === cliente.codCliente || inputNome.value === cliente.nomeCliente || inputNome.value === '') {
                    return true
                }
            }
        }
    }) // btnSalvar

    btnFechar.addEventListener('click', () => {
        conteudo.innerHTML = ''
    })
}) // Evento li Clientes

// _____________________________ PRODUTOS _____________________________//
liProdutos.addEventListener('click', () => {
    criar_formularioDinamicamente(conteudo, 'formProdutos')

    const inputCodigo = document.querySelector('#inputCodigo')
    const inputDescricao = document.querySelector('#inputDescricao')
    const inputPreco = document.querySelector('#inputPreco')
    const inputQuantidade = document.querySelector('#inputQuantidade')
    const btnFechar = document.querySelector('#btnFechar')
    const btnAnterior = document.querySelector('#btnAnterior')
    const btnProximo = document.querySelector('#btnProximo')
    const btnNovo = document.querySelector('#btnNovo')
    const btnSalvar = document.querySelector('#btnSalvar')
    let cadastro = 0
    inputCodigo.value = produtos[cadastro].codProduto
    inputDescricao.value = produtos[cadastro].descProduto
    inputPreco.value = produtos[cadastro].precoProduto
    inputQuantidade.value = produtos[cadastro].qtdEstoqueProd

    btnProximo.addEventListener('click', () => {
        if ((cadastro + 1) < produtos.length) {
            cadastro++
            inputCodigo.value = produtos[cadastro].codProduto
            inputDescricao.value = produtos[cadastro].descProduto
            inputPreco.value = produtos[cadastro].precoProduto
            inputQuantidade.value = produtos[cadastro].qtdEstoqueProd
        } else {
            alert('Não há mais cadastros para mostrar')
        }
    }) // btnProximo

    btnAnterior.addEventListener('click', () => {
        if (cadastro > 0) {
            cadastro--
            inputCodigo.value = produtos[cadastro].codProduto
            inputDescricao.value = produtos[cadastro].descProduto
            inputPreco.value = produtos[cadastro].precoProduto
            inputQuantidade.value = produtos[cadastro].qtdEstoqueProd
        } else {
            alert('Não há mais cadastros para mostrar')
        }
    }) // btnAnterior

    btnNovo.addEventListener('click', () => {
        inputCodigo.value = produtos.length + 1
        inputDescricao.value = ''
        inputPreco.value = ''
        inputQuantidade.value = ''
    }) // btnNovo

    btnSalvar.addEventListener('click', () => {
        if (!verificar_ProdutosCadastrados(produtos)) {
            produtos.push({
                "codProduto": parseInt(inputCodigo.value),
                "descProduto": inputDescricao.value,
                "precoProduto": parseFloat(inputPreco.value).toFixed(2),
                "qtdEstoqueProd": parseInt(inputQuantidade.value)
            })
            cadastro = 0
            inputCodigo.value = produtos[cadastro].codProduto
            inputDescricao.value = produtos[cadastro].descProduto
            inputPreco.value = produtos[cadastro].precoProduto
            inputQuantidade.value = produtos[cadastro].qtdEstoqueProd
            alert('Produto cadastrado com sucesso')
        } else {
            alert('Não foi possível cadastrar o produto')
        }

        function verificar_ProdutosCadastrados(produtos) {
            for (let item of produtos) {
                if (parseInt(inputCodigo.value) === item.codProduto || inputDescricao.value === item.descProduto || inputDescricao.value === '' || inputPreco.value === '' || inputQuantidade.value === '' || isNaN(parseFloat(inputPreco.value)) || isNaN(parseInt(inputQuantidade.value))) {
                    return true
                }
            }
        }
    }) // btnSalvar

    btnFechar.addEventListener('click', () => {
        conteudo.innerHTML = ''
    })
}) // Evento li Produtos

// _____________________________ PEDIDOS _____________________________//
liPedidos.addEventListener('click', () => {
    criar_formularioDinamicamente(conteudo, 'formPedidos')

    const inputCodigoCliente = document.querySelector('#inputCodigoCliente')
    const inputNomeCliente = document.querySelector('#inputNomeCliente')
    const inputCodigoProduto = document.querySelector('#inputCodigoProduto')
    const inputDescricaoProduto = document.querySelector('#inputDescricaoProduto')
    const inputPrecoProduto = document.querySelector('#inputPrecoProduto')
    const inputQtdProduto = document.querySelector('#inputQtdProduto')
    const btnLancarNoPedido = document.querySelector('#btnLancarNoPedido')
    const precoTotal = document.querySelector('#precoTotal')
    const btnFechar = document.querySelector('#btnFechar')
    let total = 0
    let contador = 0

    inputCodigoCliente.addEventListener('blur', () => {
        if (verifcar_item(inputCodigoCliente, clientes)) {
            inputNomeCliente.value = clientes[inputCodigoCliente.value - 1].nomeCliente
        } else {
            alert('Cliente não encontrado')
        }
    }) // inputCodigoCliente

    inputCodigoProduto.addEventListener('blur', () => {
        if (verifcar_item(inputCodigoProduto, produtos)) {
            inputDescricaoProduto.value = produtos[inputCodigoProduto.value - 1].descProduto
            inputPrecoProduto.value = produtos[inputCodigoProduto.value - 1].precoProduto
        } else {
            alert('Produto não encontrado')
        }
    }) // inputCodigoProduto

    function verifcar_item(codigo, array) {
        for (let item of array) {
            if (parseInt(codigo.value) === item.codCliente || parseInt(codigo.value) === item.codProduto) {
                return true
            }
        }
    }

    let itensAdicionadosPedido = []
    btnLancarNoPedido.addEventListener('click', (e) => {
        e.preventDefault()

        if (inputCodigoProduto.value !== '' && inputQtdProduto.value !== '') {
            if (!isNaN(inputQtdProduto.value)) {
                if(!verifcar_itensAdicionados()){
                    if (parseInt(inputQtdProduto.value) > 0 && parseInt(inputQtdProduto.value) <= verificar_estoque(produtos)) {
                        contador++
                        const tbody = document.querySelector('#tbody')
                        let linha = document.createElement('tr')
                        let colunaNumero = document.createElement('td')
                        let colunaDescricao = document.createElement('td')
                        let colunaPreco = document.createElement('td')
                        let colunaQtd = document.createElement('td')
                        let colunaSubTotal = document.createElement('td')

                        linha.appendChild(colunaNumero).textContent = contador
                        linha.appendChild(colunaDescricao).textContent = inputDescricaoProduto.value
                        linha.appendChild(colunaPreco).textContent = parseFloat(inputPrecoProduto.value).toFixed(2)
                        linha.appendChild(colunaQtd).textContent = inputQtdProduto.value
                        linha.appendChild(colunaSubTotal).textContent = (parseFloat(inputPrecoProduto.value) * parseFloat(inputQtdProduto.value)).toFixed(2)
                        tbody.appendChild(linha)
                        
                        itensAdicionadosPedido.push(colunaDescricao.innerText)
                        
                        calcularTotal((parseFloat(inputPrecoProduto.value) * parseFloat(inputQtdProduto.value)))
                    } else {
                        alert(`Não foi possível adicionar o produto. Quantidade em estoque de ${inputDescricaoProduto.value}: ${verificar_estoque(produtos)}`)
                    } // quantidade valida
                }else{
                    alert('Produto já adcionado na lista')
                } // itens adicionados

                function verifcar_itensAdicionados(){
                    for(let itens of itensAdicionadosPedido){
                        if(itens === inputDescricaoProduto.value){
                            return true
                        }
                    }
                }

                function verificar_estoque(array) {
                    for (let produto of array) {
                        if (parseInt(inputCodigoProduto.value) === produto.codProduto) {
                            return produto.qtdEstoqueProd
                        }
                    }
                }
            } else {
                alert('Quantidade inválida')
            } // quantidade é um número
        } else {
            alert('Prencha todos os campos')
        } // campos do codigo e da quantidade estão preenchidos
    })

    function calcularTotal(subtotal) {
        total += subtotal
        precoTotal.innerHTML = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    }
    calcularTotal(0)

    btnFechar.addEventListener('click', () => {
        conteudo.innerHTML = ''
    })
}) // Evento li Pedidos