const express = require('express')
const app = express()
app.use(express.json())

const baseConsolidada = {}

const funcoes = {
    LembreteCriado: (lembrete) => {
        baseConsolidada[lembrete.id] = lembrete
    },
    ObservacaoCriada: (observacao) => {
        const observacoes = baseConsolidada[observacao.lembreteId]['observacoes'] || []
        observacoes.push(observacao)
        baseConsolidada[observacao.lembreteId]['observacoes'] = observacoes
    }
}

//disponibiliza a base de consolidada
app.get('/lembretes', (req, res)=>{
// devolver a base consolidada com um json
res.json(baseConsolidada)

})

//recebe eventos, viabilizando a atualização da base
app.post('/eventos', (req, res) => {
    try{
        //pegar o evento do corpo da requsição e fazer esse ponteiro apontar pra ele 
        const evento = req.body
        //desestruturar o evento, criando variaveis type e payload
        // const type = evento.type
        // const payload = evento.payload
        const { type, payload } = evento
        console.log(evento)
        //acessar o mapa de funções na posição type e chamar a função resultante entregando a ela, como parametro, o payload
        funcoes[type](payload)
    }
    catch(e){}})
    

const port = 6000
app.listen(port, () => {console.log(`Consulta. Porta ${port}`)})