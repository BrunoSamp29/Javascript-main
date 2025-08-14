function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var born = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (born.value.length == 0 || Number(born.value) > ano){
        window.alert('Opa, ta doido? tem nem idade pra andar direito e quer responder formulário?')
    } else{
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var idade = ano -  Number (born.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade > 0 && idade <= 10){
                img.setAttribute('src', 'criançahomem.png')
            }else if(idade > 10 && idade <= 20){
                img.setAttribute('src', 'adolescentehomem.png')
            } else if(idade > 20 && idade <= 50){
                img.setAttribute('src', 'adultohomem.png')
            }else{
                img.setAttribute('src', 'idosohomem.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            
            if(idade > 0 && idade <= 10){
                img.setAttribute('src', 'criançamulher.png')
            }else if(idade > 10 && idade <= 20){
                img.setAttribute('src', 'adolescentemulher.png')
            } else if(idade > 20 && idade <= 50){
                img.setAttribute('src', 'adultomulher.png')
            }else{
                img.setAttribute('src', 'idosomulher.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade!`
        res.appendChild(img)
    }
}


