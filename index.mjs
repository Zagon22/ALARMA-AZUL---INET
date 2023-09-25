import express from 'express';
import path from 'path';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

import { SerialPort } from 'serialport';
import { DelimiterParser } from '@serialport/parser-delimiter';

import myConnection from './db/connection/db.mjs';

const app = express()
const server = createServer(app)
const io = new Server(server)

const db = myConnection()

app.use(express.static(path.join(process.cwd(), '/public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public/index.html'))
})

io.on('connection', () => console.log('--SOCKET HABILITADO--'))

server.listen(3000, () => console.log('--CONEXIÓN ABIERTA--'))

const port = new SerialPort ({
    path: 'COM3',
    baudRate: 9600
})

const parser = port.pipe(new DelimiterParser({ delimiter: '\n'}))

parser.on('open', () => console.log('--CONEXIÓN SERIAL ABIERTA--'))

parser.on('data', (data) => {
    let dec = new TextDecoder()
    let arr = new Uint8Array(data)

    const ready = dec.decode(arr)
    console.log(ready)

    io.emit('data', ready), (err) => console.log(err)

    db.query(`INSERT INTO reportes (sector) VALUES(${ready});`)
})

port.on('error', (err) => console.log(err))