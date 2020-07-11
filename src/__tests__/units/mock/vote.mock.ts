import faker from 'faker';
import mongoose from 'mongoose';
const objectIdMock = mongoose.Types.ObjectId();

const voteMock = {
    storyId: String(objectIdMock),
    userId: faker.random.uuid(),
    vote: faker.random.number(),
    votedAt: new Date(),
};

export { voteMock };
