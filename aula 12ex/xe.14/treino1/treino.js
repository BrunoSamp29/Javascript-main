function verificar(){
    var img = document.querySelector("div#foto")
    var mensagem = document.querySelector("div#mensagem")
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML += `Opa! São ${hora} horas, seja Bem-Vindo(a)!`

    if ( hora >= 6 && hora <=12){
        document.body.style.background += "#fffab4ff"
        img.src = "fotomanha.png"
    } else if (hora < 18){
        document.body.style.background += "#fff127ff"
        img.src = "fototarde.png" 
    } else {
        document.body.style.background += "#0f0e00a5"
        img.src = "fotonoite.png"
    }
}