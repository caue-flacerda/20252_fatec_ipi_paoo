import express from 'express'
const app = express()
app.use(express.json())

const funcoes = {
    ObservaçaoCriada: (observacao) => {
        if(observacao.texto.includes(palavraChave))
            observacao.status = 'importante'
        else
            observacao.status = 'comum'
        axios.post('http://localhost:10000/eventos', {
            type: 'observacaoClassificada',
            payload: observacao
        })
    }
}

app.post('/eventos', (req, res) => {
    try{
        const evento = req.body
        console.log(evento)
        funcoes[evento.type](evento.payload)
        res.end()
    }
    catch(e){}
})
const port = 7000
app.listen(port, () => console.log(`classificação. Porta ${port}.`))