var now = new Date()
var hora = now.getHours()
console.log(`Agora são exatamente ${hora}horas`)
  if (hora <= 12 && hora >= 6){
    console.log("Bom dia")
} else if (hora <= 18){
    console.log("Boa tarde")
} else if (hora > 18){
    console.log("Boa noite")
} else if(hora >= 0){
    console.log("Boa madrugada")
}