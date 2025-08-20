//inferno de callbacks
//callback hell
const fs = require('fs')
const abrirArquivo = function(nomeArquivo){
    const exibirConteudo = function(erro, conteudo){
        if(erro){
            console.log(`Deu erro: ${erro}`)
        }
        else{
            console.log(`Conteúdo: ${conteudo}`)
            const dobro = Number(conteudo.toString()) * 2
            const finalizar = function(erro){
                if(erro){
                    console.log(`Deu erro escrevendo o dobro: ${erro}`)
                }else{
                    console.log('A escrita do dobro deu certo')
                }
            }
            fs.writeFile('dobro.txt', dobro.toString(), finalizar)
            console.log('Fim da exibirConteudo...')
        }
    }
    fs.readFile(nomeArquivo, exibirConteudo)
    console.log('Fim da abrirArquivo...')
}
//chamar a função daqui a pouco
abrirArquivo("arquivo.txt")
// function demorada(tempo){
//     const atualMaisTempo = new Date().getTime() + tempo
//     while(new Date().getTime() <= atualMaisTempo);
//     const d = 8 + 4
//     return d
// }
// const a = 2 + 6
// const b = 5 + 9
// setTimeout(() => {
//     const tempo = 2000
//     const d = demorada(tempo)
//     console.log(`d(${tempo}): ${d}`)
// }, 0)
// setTimeout(() => {
//     const tempo = 1000
//     const d = demorada(tempo)
//     console.log(`d(${tempo}): ${d}`)
// }, 0)
// const e = 2 + a + b
// console.log(`e: ${e}`)
// const a = 2 + 7
// const b = 5
// console.log(a+b)

// console.log('Eu primeiro...')
// console.log('Agora eu...')
// console.log('Sempre a última:(')

// //uma concessionária com CNPJ e endereço, com logradouro, numero e bairro (pensar na estrutura que um bairro pode ter). Ela tem um estoque de veiculos. Cada um tem marca, modelo e ano de fabricação. Precisa pensar que o número de veículos que a concessionária tem pode variar ao longo do tempo, ele pode estar vazio, pode ter 15, pode ter 502 e assim por diante.

// let calculadora = {
//     soma: (a,b) => a + b,
//     subtracao: function(a,b){
//         return a - b
//     }
// }
// // dados esses dois valores, aplicar todas as operações da calculadora sobre eles
// let x = 2
// let y = 3
// for (let operacao of Object.values(calculadora)){
//     //Antes de mostrar o resultado, mostrar o nome da função, interpolando em um único console.log ${}
// console.log(`${operacao.name}: ${operacao(x,y)}`)
// }
// const concessionaria = {
//     cnpj: '0011122210001-45',
//     endereco: {
//         logradouro: 'Rua A',
//         numero: 120,
//         bairro: {
//             nome: 'Vila j',
//             regiao: 'zona norte'
//         }
//     },
//     veiculos:[
//         {
//             marca: 'Ford',
//             modelo: 'Ka',
//             anoDeFabricacao: 2015
//         },
//         {
//             marca: 'Chevrolet',
//             modelo: 'Onix',
//             anoDeFabricacao: 2022
//         }
//     ]
// }

// const concessionaria = {
//     cnpj: '0011122210001-45',
//     endereco: {
//         logradouro: 'Rua A',
//         numero: 120,
//         bairro: {
//             nome: 'Vila j',
//             regiao: 'zona norte'
//         }
//     },
//     veiculos:{
//         'Ford': [
//             {
//                 modelo: 'Ka',
//                 anoDeFabricacao: 2015
//             },
//             {
//                 modelo: 'Ecosport',
//                 anoDeFabricacao: 2018
//             }
//         ],
//         'chevrolet': [
//             {
//                 modelo: 'Onix',
//                 anoDeFabricacao: 2025
//             }
//         ]
//     }
// }
//     for(let marca of Object.keys(concessionaria.veiculos)){
//         console.log(marca)
//         const veiculosDaMarca = concessionaria.veiculos[marca]
//         // console.log(veiculosDaMarca)
//         for (let veiculo of veiculosDaMarca){
//             console.log(veiculo.modelo)
//         }
//     }
    // for(let veiculoFord of concessionaria.veiculos.Ford){
    //     console.log(veiculoFord)
    // }
//escrever um for que, internamente, itera sobre cada possivel marca, para cada marca, mostrar somente o modelo do veiculo 
// dica: pesquise sobre 'keys' em javascripts

// objeto Javascript não é sinônimo de Objeto JSON (Javascript Object Notation), mas são parecidos
//Uma pessoa se chama Maria, tem 21 anos e mora na Rua B, número 121
// let pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     endereco:{
//         logradouro: 'Rua B',
//         numero: 121
//     }
// }
// console.log(pessoa.nome)
// console.log(pessoa['idade'])
// console.log(pessoa.endereco.logradouro)
// console.log(pessoa.endereco.numero)



// uma pessoa se chama João e tem 17 anos
// let pessoa = {
//     nome: 'João',
//     idade: 17
// }
// console.log('Me chamo ' + pessoa.nome)
// console.log('Minha idade é ' + pessoa.idade)


// function saudacoesFactory(saudacao, nome){
//     return function(){
//         console.log(`${saudacao}, ${nome}`)
//     }
// }
// let olaJoao = saudacoesFactory('ola', 'joao')
// let tchauJoao = saudacoesFactory('tchau', 'joao')
// olaJoao()
// tchauJoao()

// function ola(){
//     let nome = 'João'
//     return function(){
//         console.log(`Ola, ${nome}`)
//     }
// }
// let olaResult = ola()

// olaResult()
// function f(){
//     let nome = 'João'
//     function g(){
//         console.log(nome)
//     }
//     g()
// }
// f()


//closures
// let umaFuncao = function(){
//     console.log('Fui armazenada em uma variável')
// }
// //umaFuncao()
// function f(funcao){
//     funcao()
// }
// //f(umaFuncao())
// function g(){
//     function outraFuncao(){
//         console.log('Fui criada por g')
//     }
//     return outraFuncao
// }

// vetores, parte 2
// const valores = [1,2,3,4]
// const soma = valores.reduce((ac, v) => ac + v)
// console.log(soma)
// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
// const numeros = [1,2,3] // [1,4,9]
// const quadrado = numeros.map( n => n * n)
// console.log(quadrado)
// const res = nomes.map(function(nome){return nome[0]})
// console.log(res)
// const apenasComA = nomes.filter(nome => nome.startsWith('A'))
// console.log(apenasComA)
// arrow function
// tem exatamente um parâmetro: parênteses podem ser omitidos
// const dobro = n => 2 * n
// console.log(dobro(2))
// tem somente uma linha que produz um valor  a ser devolvido:
// const dobro = (n) => { 2 * n}
// console.log(dobro(1))
// const dobro = (n) => 2 * n
// console.log(dobro(5))

// tem somente uma linha: as chaves podem ser omitidas
// const hello = () => console.log("hello")
// hello()
// const hello = () => {
//     console.log('Hello')
// }
// hello()
// const triplo = function(n = 5){
//     return 3 * n
// }
// console.log(triplo())
// console.log(triplo(10))
// const dobro = function (n){
//     return 2 * n
// }
// console.log(dobro(6))
// callable "chamável", que pode ser chamado
// function soma(a, b){
//     return a + b
// }
// const res = soma(2,3)
// console.log(res)
// function hello(){
//     console.log('oi')
// }
// hello()
// function hello(nome){
//     console.log('Hello, ' + nome)
// }
// hello('Ana')

// int somar(int a, int b){
//     return a + b;
// }

// vetores
// v2 = [2, "abc", true]
// console.log(v2)
// for(let i = 0; i < v2.length; i++){
//     console.log(v2[i])
// } 
// v1 = []
// console.log(v1.length)
// v1[0] = 3.4
// console.log(v1.length)
// v1[10] = 2
// console.log(v1.length)
// v1[7] = "abc"

// comparação
// operadores == e ===
//coerção
// const n1 = 2
// const n2 = '3'
// //coerção implícita
// const n3 = n1 + n2
// console.log(n3)
// //coerção explícita
// const n4 = n1 + Number(n2)
// console.log(n4)
//sistemas de tipos
// let idade = 20 
// console.log(typeof(idade))
// let nome = "Ana"
// console.log(typeof(nome))
// idade = "vinte"
// console.log(typeof(idade))
// declaração de variáveis
// const, let e var
// var linguaguem = "Javascript"
// console.log("Aprendendo " + linguaguem)
// var linguaguem = "Java"
// console.log("Aprendendo " + linguaguem)
// var c = 2
// var nome = 'José'

// let a = 2
// let nome = "José"
// console.log(a)
// console.log(nome)
// nome = "José da Silva"
// console.log(nome)

//const nome = 'José'
//console.log(nome)