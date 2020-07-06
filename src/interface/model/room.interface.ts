import { Document } from "mongoose";

interface IRoom extends Document {
    ownerId: String;
    ownerName: String;
    maxUsers?: Number;
    createAt?: Date;
    endedAt?: Date;
}

export default IRoom;
