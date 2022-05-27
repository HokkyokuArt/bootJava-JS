const liClientes = document.querySelector('#clientes')
const liProdutos = document.querySelector('#produtos')
const liPedidos = document.querySelector('#pedidos')
const conteudo = document.querySelector('#content')
const divdiv = document.querySelectorAll('#content > div')




liClientes.addEventListener('click', () => {

    let input = document.createElement('input')
    input.setAttribute('id', 'testeTeste')
    conteudo.innerHTML= `<input id="inputTeste" value=""> <button type="button" id="btn">Click</button> <input id="inputResposta" value="" disabled>`

    const inputTeste = document.querySelector('#inputTeste')
    const btn = document.querySelector('#btn')
    const inputResposta = document.querySelector('#inputResposta')

    btn.addEventListener('click', ()=>{
        inputResposta.value = inputTeste.value * 1000
    })

       

})



liProdutos.addEventListener('click', () => {

    let input = document.createElement('input')
    input.setAttribute('id', 'testeTeste')
    conteudo.innerHTML= `<input id="inputTeste" value=""><input id="inputTeste" value=""><input id="inputTeste" value=""><input id="inputTeste" value=""> <button type="button" id="btn">Click</button> <input id="inputResposta" value="" disabled>`

    const inputTeste = document.querySelector('#inputTeste')
    const btn = document.querySelector('#btn')
    const inputResposta = document.querySelector('#inputResposta')

    btn.addEventListener('click', ()=>{
        conteudo.innerHTML = ''
    })
    

    
})

liPedidos.addEventListener('click', () => {
    conteudo.innerHTML = ``
})

