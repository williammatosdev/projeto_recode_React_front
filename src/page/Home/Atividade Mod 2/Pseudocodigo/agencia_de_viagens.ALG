algoritmo "AgenciadeViagem"
var
   nome, destino, esc: caractere
   qtdPassagens: inteiro

   procedimento listarPassagens(nome, dest: caractere; quant: inteiro)
   var
      valorPassagens: vetor[1..20] de real
      cadastro: vetor[1..2] de caractere
      c:inteiro
      preco: real

   inicio
      cadastro[1] <- nome
      cadastro[2] <- dest
      
      para c<-1 ate quant faca
           escreva("Preço da passagem: R$")
           leia(preco)
           se preco >= 400 entao
              escreval("Será cobrado uma taxa de 10%")
           senao
              escreval("Será cobrado uma taxa de 20%")
           fimse
           valorPassagens[c] <- preco
      fimpara
      
      escreval("Digite seu Nome: ",cadastro[1])
      escreval("Local de Desembarque: ",cadastro[2])
      escreval("Passagens compradas: ", quant)
      para c<-1 ate quant faca
           se valorPassagens[c] >= 400 entao
              escreval("Valor da ", c,"ª passagem: R$", valorPassagens[c] * 1.1," com 10% de taxa")
           senao
                escreval("Valor da ", c,"ª passagem: R$", valorPassagens[c] * 1.2," com 20% de taxa")
           fimse
      fimpara

   fimprocedimento
   
inicio
      escreval("---------AGÊNCIA DE VIAGENS VoeBem---------")
      escreva("Digite seu nome: ")
      leia(nome)
      escreva("Seu destino: ")
      leia(destino)
      escreva("Digite aqui Quantas Passagens? ")
      leia(qtdPassagens)
      listarPassagens(nome, destino, qtdPassagens)
      
fimalgoritmo