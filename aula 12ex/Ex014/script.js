function carregar(){
    var msg = document.querySelector("div#msg")
    var img = document.querySelector("img#img")
    var data = new Date()
    var hora = data.getHours
    msg.innerHTML = `Agora são ${hora} horas `

    if( hora >= 6 && hora <= 12){
        img.scr = "fotomanha.png"
        document.body.style.background = "#e2cd9f"
    } else if(hora < 18){
        img.src = "imagens/fototarde.png"
        document.body.style.background = "#b9846f"
    } else{
        img.src = "imagens/fotonoite.png"
        document.body.style.background = "#515154"
    }
}
