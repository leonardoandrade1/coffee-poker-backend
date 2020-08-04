import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

export class MongooseBootstrapTest {
    private mongoServer: MongoMemoryServer;

    constructor() {
        this.setJestTimeout();
    }

    private setJestTimeout(): void {
        jest.setTimeout(15000);
    }

    async initialize(): Promise<void> {
        this.mongoServer = new MongoMemoryServer();
        const mongoUri = await this.mongoServer.getUri();

        await mongoose.connect(mongoUri, {}, err => {
            if (err) console.error(err);
        });
    }

    async finish(): Promise<void> {
        await mongoose.disconnect();
        await this.mongoServer.stop();
    }
}
