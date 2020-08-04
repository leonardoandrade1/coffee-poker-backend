import faker from 'faker';
import mongoose from 'mongoose';
import IVote from 'interface/model/vote.interface';
const objectIdMock = mongoose.Types.ObjectId();

const voteMock: IVote = {
    storyId: String(objectIdMock),
    userId: faker.random.uuid(),
    vote: faker.random.number(),
    votedAt: new Date(),
};

export { voteMock };
