import express from 'express'
//import dot

const server = express()

const PORT = 8080
const ready = ()=> console.log('server ready')

server.listen(PORT,ready)w