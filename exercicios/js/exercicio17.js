// EU ENTENDI O EXERCICIO ERRADO KKKK
// Mas ficou como eu pensei e depois quando eu vi a resposta, não quis mudar... :)


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
}