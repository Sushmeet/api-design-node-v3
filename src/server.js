import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()
const router = express.Router()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const PORT = 3000
const HOSTNAME = 'http://localhost'

// middleware function
// use it to modify stuff and then move on to the next middleware or controller.
const log = (req, res, next) => {
    console.log('Middleware Log Run ')
    next()
}


// register the router
app.use('/api', router)

// router functions
router.get('/me', (req, res) => {
    res.json({
        name: 'sushi'
    })
})

//controller function
// middleware and controller are basically the same thing it just thier intention is different.
app.get('/home', log, (req, res) => {
    res.status(200).json({
        name: 'sushi'
    })
})

app.post('/home', (req, res) => {
    console.log(req.body);
    res.json({message: 'ok'})
})


export const start = () => {
    const server = app.listen(PORT, () => {
        console.log(`server has started on ${PORT}`)
    })
return server
}
