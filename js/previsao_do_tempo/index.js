require('dotenv').config()
const axios = require('axios')


// const PROTOCOL = process.env.PROTOCOL
// const BASE_URL = process.env.BASE_URL
// const APPID = process.env.APPID
// const UNITS = process.env.UNITS
// const Q = process.env.Q
// const LANG = process.env.IDIOM
// const CNT = process.env.CNT

//async/await
function fatorial(n){
    if(n < 0) return Promise.reject('Valor não pode ser negativo')
    let res = 1
    for(let i = 2; i <= n; i++) res *= i
    return Promise.resolve(res)
}

async function chamadaComAsycAwait(){
    const n1 = 5, n2 = -2
    try {
        const res1 = await fatorial(n1)
        console.log(`Fatorial de ${n1}: ${res1}`)
    } catch (erro) {
        console.log(`Erro: ${erro}`)
    }

    try {
        const res2 = await fatorial(n2)
        console.log(`Fatorial de ${n2}: ${res2}`)
    } catch (erro) {
        console.log(`Erro: ${erro}`)
    }
}
chamadaComAsycAwait()
// function chamadaComThenECatch(){
//     const n1 = 5, n2 = -2;
//     fatorial(n1)
//     .then(res => console.log(`Fatorial de ${n1}: ${res}`))
//     .catch(err => console.log(`Erro: ${err}`))
// }

// chamadaComThenECatch()
// function hello(nome){
//     return `Oi, ${nome}`
// }
// async function outra(){
//     await
// }
// hello("Ana").then(res => console.log(res))
// function hello(nome){
//     //return `Oi, ${nome}`
//     const p = new Promise((resolve, reject) => {
//         resolver(`oi, ${nome}`)
//     })
//     return p
// }
// const res = hello('Ana')
// res.then((textoResultante) => {
//     console.log(textoResultante)
// })

// const { PROTOCOL, BASE_URL, APPID, UNITS, Q, IDIOM: LANG, CNT } = process.env

// const URL = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&units=${UNITS}&q=${Q}&lang=${LANG}&cnt=${CNT}`

// console.log(URL)

// const promiseResultante = axios.get(URL)

// promiseResultante
// .then((resposta) => {
//     const url2 = resposta.url2
//     axios.get(url2).then((resposta2) =>{

//     })
// })
// .then((resposta) => {
//     for (const previsao of resposta.data.list) {
//         console.log(previsao.main.temp_min)
//         console.log(previsao.main.temp_max)
//         console.log(previsao.main.humidity)
//         console.log(previsao.weather[0].)
//     }
// })
// .then((reposta) => {
//     //console.log(reposta)
//     const list = reposta.data.list
//     console.log(list)
//     return list
// })
// .then((resposta) => {
//     //exibir temperatura minima e maxima da primeira previsao
//     console.log(`Temp min: ${resposta[0].main.temp_min}`)
//     console.log(`Temp max: ${resposta[0].main.temp_max}`)
//     return resposta[0].weather
// })
// .then((resposta) => {
//      console.log(resposta[0].description)
// })
// .catch((erro) => {
//     console.log(`Erro: ${erro}`)
// })

console.log('Terminado...')