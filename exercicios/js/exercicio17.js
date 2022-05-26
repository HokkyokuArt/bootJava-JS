// O array abaixo deverá ser apresentado em uma lista ordenada(elemento html) ao clicar em um botão:
// let veiculos=["ônibus","motocicleta","patinete"]
// Abs .: os itens do elemento serão criados no mesmo instante queousuário clicar no botão.

window.onload = function () {

    let veiculos = ["ônibus", "motocicleta", "patinete", "teste","ônibus", "motocicleta", "patinete", "teste"]

    // __________________________________Constantes_____________________________________//

    const listaVeiculos = document.querySelector('#listaVeiculos');
    const btn = document.querySelector('#btn');


    // ____________________________________Events______________________________________//

    btn.addEventListener('click', function () {
        adicionarVeiculo()
    })

    // __________________________________Functions_____________________________________//

    let i = 0
    function adicionarVeiculo() {
        if (veiculos[i]) {
            let criarLi = document.createElement('li')
            listaVeiculos.appendChild(criarLi).textContent = veiculos[i]
            i++
        }

    }

































    /*
         let produtos = [
            {
                descricao: 'biscoito mirabel',
                preco: 1
            },
            {
                descricao: 'marmelada',
                preco: 1.5
            },
            {
                descricao: 'sabonete',
                preco: 2
            },
            {
                descricao: 'teste',
                preco: 4
            }
        ]
    
        const listaProdutos = document.querySelector('#listaProdutos');
        const total = document.querySelector('#total');
        (()=>{
            let totalzinho = 0
            for(let pro of produtos){
                const filhoLi= document.createElement('li')
    
                for(listaP in pro){
                    if(listaP == 'preco'){
                        listaProdutos.appendChild(filhoLi).setAttribute('data-preco', pro[listaP])
                        totalzinho += pro[listaP]
                    }else {
                        listaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}`
                    }
                }
            }
            total.value = totalzinho
        })()
    
    */














}