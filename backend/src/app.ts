import config from "config"
import cors from 'cors'
import express, { json } from "express"
import { connect } from "./db/mongoose"
import errorLogger from "./middlewares/error/error-logger"
import errorResponder from "./middlewares/error/error-responder"
import notFound from "./middlewares/not-found"
import gamesRouter from "./routers/gamesRouter"

const name = config.get<string>('mongoose.database')

const app = express();

export async function start() {
    try {
        console.log('***************************************************************')
        console.log('***************  Connecting to Database ***********************')
        console.log('***************************************************************')

        await connect()

        console.log('***************************************************************')
        console.log(`********* Logged in successfully to database ${name} **********`)
        console.log('***************************************************************')


        app.use(cors())
        app.use(json())

        app.use('/games', gamesRouter)
        app.use(notFound)

        app.use(errorLogger)
        app.use(errorResponder)

    } catch (error) {
        console.log('Error resetting database', error)
    }
}


export default app


