import { Document } from 'mongoose';

interface IRoom {
    ownerId: string;
    ownerName: string;
    maxUsers?: number;
    createAt?: Date;
    endedAt?: Date;
}

export default IRoom;
