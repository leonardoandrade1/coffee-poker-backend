import RoomModel from '../model/room.model';
import IRoom from '../interface/model/room.interface';

class RoomRepository {
    //verificar pq não é retornado o ownerName
    async createRoom(anonymousUUID: string, ownerName: string): Promise<IRoom> {
        try {
            const room = await RoomModel.create({
                ownerId: anonymousUUID,
                ownerName: ownerName,
            });

            return room;
        } catch (error) {
            throw new Error(error);
        }
    }

    async findById(roomId: string): Promise<IRoom> {
        try {
            const room = await RoomModel.findById(roomId);

            if (room) {
                return room;
            } else {
                throw Error('Room not found');
            }
        } catch (error) {
            throw Error(error);
        }
    }

    async getAllRooms(): Promise<IRoom[]> {
        return RoomModel.find();
    }
}

export default new RoomRepository();
