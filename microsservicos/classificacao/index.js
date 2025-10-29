import express from 'express'
const app = express()
app.use(express.json())
const port = 7000
app.listen(port, () => console.log(`classificação. Porta ${port}.`))