import faker from 'faker';
import IRoom from 'interface/model/room.interface';

const roomMock: IRoom = {
    ownerId: faker.random.uuid(),
    ownerName: faker.name.firstName(),
};

export { roomMock };
