function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")

    if( fano.value.length == 0 || Number(fano.value) >= ano){
        alert("Verifique os dados e tente novamente")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if ( fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'criançahomem.png')
            } else if (idade < 21){
                img.setAttribute('src', 'adolescentehomem.png')
            }else if (idade < 50){
                img.setAttribute('src', 'adultohomem.png')
            } else {
                img.setAttribute('src', 'idosohomem.png')
            }
        } else if ( fsex[1].checked){
            genero = "Mulher"
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'criançamulher.png')       
            } else if (idade < 21){
                img.setAttribute('src', 'adolescentemulher.png')
            }else if (idade < 50){
                img.setAttribute('src', 'adultomulher.png')
            } else {
                img.setAttribute('src', 'idosomulher.png')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}