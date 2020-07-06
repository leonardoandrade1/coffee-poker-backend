import RoomModel from "../model/room.model";
import IRoom from "../interface/model/room.interface";

class RoomRepository {
    constructor() {}

    async createRoom(anonymousUUID: String, ownerName: String): Promise<IRoom> {
        try {
            const room = await RoomModel.create({
                ownerId: anonymousUUID,
                ownerName,
            });

            return room;
        } catch (error) {
            throw new Error(error);
        }
    }

    async findById(roomId: String): Promise<IRoom> {
        try {
            const room = await RoomModel.findById(roomId);
            return room;
        } catch (error) {
            throw Error(error);
        }
    }

    async getAllRooms(): Promise<IRoom[]> {
        return RoomModel.find();
    }
}

export default new RoomRepository();
