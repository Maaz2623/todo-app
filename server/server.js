import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import bodyParser from 'body-parser'

import todosRoute from './routes/todosRoute.js'

const app = express()

app.use(cors())
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))


// Connect To Database 
const database_url = process.env.DATABASE_URL
mongoose.connect(database_url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected To MongoDB'))
.catch((err) => console.log(err))


app.use('/todos', todosRoute)


const server_port = process.env.PORT
app.listen(server_port, () => console.log(`Listening on port: ${server_port}`))