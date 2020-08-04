import { MongooseBootstrapTest } from '../../config/bootstrap';
import RoomModel from '../../../model/room.model';

import { roomMock } from '../mock/room.mock';

describe('RoomModel Suite Tests', () => {
    let mongooseBootstrap: MongooseBootstrapTest;

    beforeAll(async () => {
        mongooseBootstrap = new MongooseBootstrapTest();
        await mongooseBootstrap.initialize();
    });

    afterAll(async () => {
        await mongooseBootstrap.finish();
    });

    beforeEach(async () => {
        await RoomModel.deleteMany({});
    });

    it('Should create the room to be vote stories', async () => {
        const story = await RoomModel.create(roomMock);

        expect(story).not.toEqual({});
    });

    it('Created room should return {_id}', async () => {
        const story = await RoomModel.create(roomMock);

        expect(story._id).not.toBeNull();
    });

    it('Should return error when create room without {ownerId}', async () => {
        const roomPayload = {
            ...roomMock,
        };

        delete roomPayload['ownerId'];

        try {
            await RoomModel.create(roomPayload);
        } catch (error) {
            expect(RoomModel.create).toThrowError();
        }
    });

    it('Should return error when create room without {ownerName}', async () => {
        const roomPayload = {
            ...roomMock,
        };

        delete roomPayload['ownerName'];

        try {
            await RoomModel.create(roomPayload);
        } catch (error) {
            expect(RoomModel.create).toThrowError();
        }
    });

    it('When find room by {id}, must be return found room', async () => {
        const { _id: roomId } = await RoomModel.create(roomMock);

        const room = await RoomModel.findById(roomId);

        expect(room).not.toEqual({});
    });
});
