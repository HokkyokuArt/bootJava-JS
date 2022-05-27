const user = document.querySelector('#user')
const pws = document.querySelector('#pws')
const btn = document.querySelector('#btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    fazer_requisicao()
})

let fazer_requisicao = async function () {
    let usuarios = `./script/usuario.json`
    let dadosFetch = await fetch(usuarios)
    let dadosJson = await dadosFetch.json();

    if (verificar_Credenciais(dadosJson.users)) {
        window.location.href = `../panel/panel.html`
        user.value = ''
        pws.value = ''
    } else {
        alert(`Usuario ou senha incorreta`)
    }
}

function verificar_Credenciais(dadosJson) {
    for (let User of dadosJson) {
        if (User.user === user.value && User.pws === pws.value) {
            return true
        }
    }
}


//_________________________________ Copiado :( _________________________________//

    // const findUser = dadosJson.find((item) => {
    //     return item.user === user.value && item.pws === pws.value;
    // })

    // if(findUser){
    //     window.location.href = `../panel/panel.html`
    //     user.value = ''
    //     pws.value = ''
    //    


    // } else {
    //     alert(`Usuario ou senha incorreta`)
    // }
