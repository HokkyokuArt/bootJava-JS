window.onload = function () {
    const user = document.querySelector('#user')
    const pws = document.querySelector('#pws')
    const btn = document.querySelector('#btn')

    btn.addEventListener('click', (e) => {
        
            e.preventDefault()
        verificar_Credenciais(user.value, pws.value)
            


    })



    let verificar_Credenciais = async function(){
        let usuarios = `http://localhost/bootJava-JS/desafios/login/script/usuario.json`
        let dadosFetch = await fetch(usuarios)
        let dadosJson = await dadosFetch.json();
        // console.log(dadosJson)
        resultadoLogin(dadosJson);
        
        
            
    }

    function resultadoLogin(dadosJson){

        for( let dado in dadosJson){
            
        }

    }


    // ((user, pws)=>{
            
    // })(user.value, pws.value)












} // Fim do onload