// window.onload = function () {
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
    
        verificar_Credenciais(dadosJson.users);

    }

    function verificar_Credenciais(dadosJson) {

        
        const findUser = dadosJson.find((item) => {
            return item.user === user.value && item.pws === pws.value;
        })

        if(findUser){
            user.value = ''
            pws.value = ''
            window.location.href = `../panel/panel.html`
            
            
        } else {
            alert(`Usuario ou senha incorreta`)
        }
        
        

    }














// } // Fim do onload