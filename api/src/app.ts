import config from 'config';
import express from 'express';
import logger from './utils/logger';
import routes from './routes';
import cors from 'cors';
import { createServer, Server } from 'http';
import { configureSocketIO, SocketInteface } from './socketConnection';
import Pusher from 'pusher';

const port = config.get<number>('port');
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer) as unknown as any

app.use(express.json());

// Enable CORS
app.use(cors({
    origin: '192.168.43.67:19000', // Set to specific origin if required
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: false
}));


const pusher = new Pusher({
    appId: "1608524",
    key: "ed99b616c44e8a1f4aba",
    secret: "4d070f6caa9d8391184d",
    cluster: "eu",
    useTLS: true
});

pusher.trigger("my-channel", "my-event", {
    message: "hello world"
});



app.listen(port, () => {
    logger.info(`Example app listening on port ${port}`)
});

configureSocketIO();

routes(app)

export { app, io }




