function treinar(){
    var msg = document.querySelector("div#msg")
    var photo = document.querySelector("img#foto")
    var date = new Date()
    var time = date.getHours()
    msg.innerHTML += `Olha só, já são ${time} horas!`

    if ( time > 6 && time <= 12){
        img.src += "../treino1/fotomanha.png"
    } else if( time < 18 ) {
        img.src += "../treino1/fototarde.png"
    } else {
        img.src += "../treino1/fotonoite.png"
    }
}