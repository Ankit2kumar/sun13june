import express from 'express'
import cors from 'cors'
import listEndpoints from 'express-list-endpoints'
import test from './db/index.js'

const port= process.env.PORT
const server = express()



server.listen(port, () => console.log("POrt is running on:", port))
