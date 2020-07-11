import { Document } from "mongoose";

interface IRoom extends Document {
    ownerId: string;
    ownerName: string;
    maxUsers?: number;
    createAt?: Date;
    endedAt?: Date;
}

export default IRoom;
