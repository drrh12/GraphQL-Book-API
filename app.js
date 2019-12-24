const express = require('express')
const app = express()
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')
const cors = require('cors')

const schema = require('./schema/schema')

//Make sure that you connect to your own database
mongoose.connect('mongodb+srv://***:****@cluster0-6dw48.mongodb.net/book-project?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
mongoose.connection.once('open', () => {
    console.log('connected to database')
})

//allow cors request
app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

const port = 4000;
app.listen(port, () => {
    console.log('Listening on port ' + port)
})
