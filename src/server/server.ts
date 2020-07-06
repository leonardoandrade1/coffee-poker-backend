import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import routes from "../routes/route";

class Server {
    public server: express.Application;

    constructor() {
        this.server = express();
        this.routes();
        this.middleware();
        this.initDatabase();
    }

    private routes(): void {
        this.server.use(routes);
    }

    private middleware(): void {
        this.server.use(cors());
        this.server.use(express.json());
    }

    private initDatabase(): void {
        const uri = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`;
        mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });

        mongoose.connection.on("connected", () => {
            console.info(
                `Mongoose connected successfully at ${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`
            );
        });

        mongoose.connection.on("error", () => {
            console.error(
                `Error in mongoose on mongodb at localhost:9090${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`
            );
        });

        mongoose.connection.on("disconnected", () => {
            console.info(
                `Mongoose disconnected at ${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`
            );
        });
    }
}

export default new Server().server;
