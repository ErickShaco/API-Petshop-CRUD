import express from 'express'

// Importando o dotenv para carregar as variáveis de ambiente
import dotenv from 'dotenv'
// Carregando as variáveis de ambiente do arquivo .env
dotenv.config()

// Importando as rotas de animais
import routeAnimal from '../petshop/src/modules/animal/routes/animal.route.js'

// Definindo a porta do servidor
const port = process.env.PORT

// Criando uma instância do express
// Isso é necessário para criar o servidor e definir as rotas
const app = express()

// Middleware para analisar o corpo das requisições como JSON
app.use(express.json())

// utilizando as rotas de animais
// conecta as rotas de animais ao servidor
app.use(routeAnimal)


app.listen(port, () => {
    console.log(`Rodando em http://localhost:${port}`)
})