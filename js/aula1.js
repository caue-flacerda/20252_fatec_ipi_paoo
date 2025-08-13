// vetores, parte 2
const valores = [1,2,3,4]
const soma = valores.reduce((ac, v) => ac + v)
console.log(soma)
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