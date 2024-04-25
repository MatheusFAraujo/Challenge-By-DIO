const heroi = {
    nome: "Scannor",
    sexo: "M",
    nivel: 9500, 
    pontosDeVida: 15000,
  }
  
  // Verificando o nível do herói e atribuindo sua liga

       if (heroi.nivel <= 1000) {
      heroi.liga = "Ferro"
  } 
       else if (heroi.nivel >= 1000 && heroi.nivel <= 2000) {
         heroi.liga = "Bronze"
    } 
       else if (heroi.nivel >= 2000 && heroi.nivel <= 5000){
         heroi.liga = "Prata"
      }
       else if (heroi.nivel >= 5001 && heroi.nivel <= 7000){
         heroi.liga = "Ouro"
      }
       else if (heroi.nivel >= 7001 && heroi.nivel <= 8000) {
         heroi.liga = "Platina"
      }
       else if (heroi.nivel >= 8001 && heroi.nivel <= 9000){
         heroi.liga = "Ascendente"
      }
       else if (heroi.nivel >= 9001 && heroi.nivel <= 10000){
         heroi.liga = "Imortal"
      } 
       else if (heroi.nivel >= 10001){
         heroi.liga = "Radiante"
      }
  
  console.log("Nome do Herói:", heroi.nome)
  console.log("Sexo:", heroi.sexo)
  console.log("Nível:", heroi.nivel)
  console.log("Pontos de Vida:", heroi.pontosDeVida)
  console.log("Liga:", heroi.liga)
