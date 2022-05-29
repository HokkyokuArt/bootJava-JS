export { criar_formularioDinamicamente }

function criar_formularioDinamicamente(element, content) {
    let text = ''

    switch (content) {
        // _____________________________ CLIENTES _____________________________ // 
        case 'formClientes':
            text = `
            <form>
                <h1>Clientes</h1>
                <button type="button" id="btnFechar">X</button>
        
                <label for="inputCodigo">Código</label>
                <input type="text" name="inputCodigo" id="inputCodigo" disabled value="1">
        
                <label for="inputNome">Nome</label>
                <input type="text" name="inputNome" id="inputNome" value="Donald Blake" placeholder="Insira seu nome *">
        
                <label for="dataCadastro">Data do Cadastro</label>
                <input type="text" name="dataCadastro" id="inputDataCadastro" disabled>
        
                <div id="btns">
                    <div id="btnsNavegacao">
                        <button type="button" id="btnAnterior" class="btn"><</button>
                        <button type="button" id="btnProximo" class="btn">></button>
                    </div>
                    <div id="btnsAcoes">
                        <button type="button" id="btnNovo" class="btn">Novo</button>
                        <button type="button" id="btnSalvar" class="btn">Salvar</button>
                    </div>
                </div>
            </form>`

            element.innerHTML = text

            break

        // _____________________________ PRODUTOS _____________________________ // 
        case 'formProdutos':
            text = `
            <form>
                <h1>Produtos</h1>
                <button type="button" id="btnFechar">X</button>
        
                <label for="inputCodigo">Código</label>
                <input type="text" name="inputCodigo" id="inputCodigo" disabled value="">
        
                <label for="inputDescricao">Descrição</label>
                <input type="text" name="inputDescricao" id="inputDescricao" value="" placeholder="Insira a descriçao do produto *">
        
                <label for="inputPreco">Preço</label>
                <input type="text" name="inputPreco"  id="inputPreco" value="" placeholder="Insira o preço *">
        
                <label for="inputQuantidade">Quantidade</label>
                <input type="text" name="inputQuantidade"  id="inputQuantidade" value="" placeholder="Insira a quantidade *">
        
                <div id="btns">
                    <div id="btnsNavegacao">
                        <button type="button" id="btnAnterior" class="btn"><</button>
                        <button type="button" id="btnProximo" class="btn">></button>
                   </div>
                    <div id="btnsAcoes">
                        <button type="button" id="btnNovo" class="btn">Novo</button>
                        <button type="button" id="btnSalvar" class="btn">Salvar</button>
                    </div>
                </div>
            </form>`

            element.innerHTML = text

            break

        // _____________________________ PEDIDOS _____________________________ // 
        case 'formPedidos':
            text = `
            <form id="formPedidos">
                <h1>Pedidos</h1>
                <button type="button" id="btnFechar">X</button>

                <label for="inputCodigoCliente">Código do Cliente</label>
                <input type="text" name="inputCodigoCliente" id="inputCodigoCliente" value="">

                <label for="inputNomeCliente">Cliente</label>
                <input type="text" name="inputNomeCliente" id="inputNomeCliente" disabled value="">

                <hr size="1" noshade>

                <p>Localizar produto</p>
    
                <div id="divLocalizarPedido">
                    <input type="text" value="" class="input1" id="inputCodigoProduto" placeholder="Id">
                    <input type="text" value="" class="input2" id="inputDescricaoProduto" disabled>
                    <input type="text" value="" class="input3" id="inputPrecoProduto" disabled>
                    <input type="text" value="" class="input3" id="inputQtdProduto">
                    <button id="btnLancarNoPedido" >Lançar no pedido</button>                    
                </div> 

                <hr size="1" noshade>

                <p>Itens do Pedido</p>

                <table id="table"> 
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                            <th>Qtd</th>
                            <th>Sub total</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                    </tbody>
                </table>

                <div id="precoTotal"></div>

            </form>`

            element.innerHTML = text

            break
    }
}

