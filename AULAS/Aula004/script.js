let chuva = prompt('Está chovendo? Sim ou Não')

    if( chuva == 'Não') {
        console.log('Leve o óculos de sol')  
    } else{
        console.log('Leve o guarda-chuva')
    }

 ///////////////////////////////////////////////////////////////////////

let numero = prompt('Insira um número: ')

    if(numero > 0){
        console.log('Esse número é POSITIVO')
        document.writeln('Esse número é POSITIVO')
    }
    else{
        console.log('Esse número é NEGATIVO')
        document.writeln('Esse número é NEGATIVO')
    }

 ///////////////////////////////////////////////////////////////////////

let idade = prompt('Qual sua idade: ')

 if( idade < 12){
    console.log('Criança de até 12 anos')
 } else if( idade >=12 && idade <18 ){
    console.log('Adolescente de 12 até 18 anos')
 } else if(idade > 18){
    console.log('Adulto maior de 18 anos')
 } else{
    console.log('Insira sua idade verdadeira!')
 }

 ///////////////////////////////////////////////////////////////////////

let parOuImpar = prompt('Insira outro número: ')

    if(parOuImpar % 2 == 0){
        console.log('Esse número é PAR')
        document.writeln('Esse número é PAR')
    }
    else{
        console.log('Esse número é IMPAR')
        document.writeln('Esse número é IMPAR')
    }

///////////////////////////////////////////////////////////////////////

let suaIdade = prompt('Qual sua idade')

    if(suaIdade > 18){
        console.log('Você é MAIOR de idade')
        document.writeln('Você é MAIOR de idade')
    } else{
        console.log('Você é MENOR de idade')
        document.writeln('Você é MENOR de idade')
    }
///////////////////////////////////////////////////////////////////////

let notaEscolar = prompt('Insira a nota:')

    if(notaEscolar <5){
        console.log('Reprovado!')
        document.writeln('Reprovado!')
    } else if (notaEscolar >= 5 && notaEscolar <= 6.9){
        console.log('Recuperação!')
        document.writeln('Recuperação!')    
    } else if (notaEscolar >= 7 ){
        console.log('Aprovado!')
        document.writeln('Aprovado!')
    } else {
        console.log('Insira uma nota válida...')
        document.writeln('Insira uma nota válida...')
    }

/////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////

let n1 = Number(prompt('Insira um número'))
let n2 = Number(prompt('Insira outro número'))
if( n1 > n2){
    console.log('O maior é ' + n1)
    document.writeln('O maior é ' + n1)
} else if (n1 < n2){
        console.log('O maior é ' + n2)
    document.writeln('O maior é ' + n2)
} else if (n1 = n2){
    console.log('Os números são iguais!')
    document.writeln('Os números são iguais!')    
} else {
    console.log('Insira um número válido...')
    document.writeln('Insira um número válido...')  
}

/////////////////////////////////////////////////////////////////////

let categoria = prompt('Qual categoria do produto? Alimento, bebida ou eletronico?')

if (categoria === 'alimento'){
    console.log('Você escolheu comida!')
    document.writeln('Você escolheu comida!')

} else if (categoria === 'bebida'){
    console.log('Você escolheu uma bebida!')
    document.writeln('Você escolheu uma bebida!')

} else if (categoria === 'eletronico'){
    console.log('Você escolheu tecnologia!')
    document.writeln('Você escolheu tecnologia!')

} else {
    console.log('Categoria inválida!')
    document.writeln('Categoria inválida!')    
}
/////////////////////////////////////////////////////////////////////

let peso = Number(prompt('insira seu peso em kg:'))
let altura = Number(prompt('Insira sua altura em metros: '))
let imc = peso/(altura*altura)

if(imc < 18.5){
    console.log('Abaixo do peso.')
    document.writeln('Abaixo do peso.')    
}else if( imc>= 18.5 && imc <= 24.9 ){
    console.log('Peso normal.')
    document.writeln('Peso normal.')     
} else if (imc >= 25 && imc <= 29.9){
    console.log('Sobrepeso.')
    document.writeln('Sobrepeso.')     
} else if (imc > 30){
    console.log('Obesidade.')
    document.writeln('Obesidade.')  
}else {
        console.log('Insira dados válidos...')
    document.writeln('Insira dados válidos...') 
}

/////////////////////////////////////////////////////////////////////

let usuario = prompt('Insira seu username:')
let senha = prompt('insira sua senha: ')

if(usuario === "admin" && senha === "1234"){
    console.log('Acesso permitido!')
    document.writeln('Acesso permitido!')      
} else {
    console.log('Acesso NEGADO!')
    document.writeln('Acesso NEGADO!')  
}
