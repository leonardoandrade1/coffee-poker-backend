import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import VoteModel from '../../../model/vote.model';

import { voteMock } from '../mock/vote.mock';

jest.setTimeout(15000);
describe('VoteModel suite tests', () => {
    let mongoServer: MongoMemoryServer;

    beforeAll(async () => {
        mongoServer = new MongoMemoryServer();
        const mongoUri = await mongoServer.getUri();
        await mongoose.connect(mongoUri, {}, err => {
            if (err) console.error(err);
        });
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoServer.stop();
    });

    beforeEach(async () => {
        await VoteModel.deleteMany({});
    });

    it('Should create vote', async () => {
        const vote = await VoteModel.create(voteMock);

        expect(vote).not.toEqual({});
    });

    it('Created vote should return {_id}', async () => {
        const vote = await VoteModel.create(voteMock);

        expect(vote._id).not.toBeNull();
    });

    it('Should return error when create vote without {storyId}', async () => {
        const votePayload = {
            ...voteMock,
        };

        delete votePayload['storyId'];

        try {
            await VoteModel.create(votePayload);
        } catch (error) {
            expect(VoteModel.create).toThrowError();
        }
    });

    it('When find vote by {id}, must return founded vote', async () => {
        const { _id: voteId } = await VoteModel.create(voteMock);

        const vote = await VoteModel.findById(voteId);

        expect(vote).not.toEqual({});
    });
});
