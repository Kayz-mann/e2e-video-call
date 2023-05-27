import { io } from "./app";
import logger from "./utils/logger";
import { Server, Socket } from 'socket.io';

export interface SocketInteface {
    roomId: string;
    userName: string;
}


export const configureSocketIO = (): void => {
    logger.info('Someone connected');
    io.on("connection", (socket: Socket) => {
        socket.on("join-room", ({ roomId, userName }: SocketInteface) => { 
            logger.info(roomId)
            logger.info(userName)
        });

    });
}


