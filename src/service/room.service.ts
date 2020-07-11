import UUIDUtil from "../utils/uuid.util";
import RoomReposiory from "../repository/room.repository";
import IRoom from "../interface/model/room.interface";

class RoomService {
    constructor() {}

    async createAnonymousRoom(ownerName: string): Promise<IRoom> {
        const anonymousUUID = UUIDUtil.generateRandomUUID();

        return await RoomReposiory.createRoom(anonymousUUID, ownerName);
    }

    async findRoomById(roomId: string): Promise<IRoom> {
        return await RoomReposiory.findById(roomId);
    }

    async findAllRooms(): Promise<IRoom[]> {
        return await RoomReposiory.getAllRooms();
    }
}

export default new RoomService();
