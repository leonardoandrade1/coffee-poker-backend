import { MongooseBootstrapTest } from '../../config/bootstrap';
import VoteModel from '../../../model/vote.model';
import { voteMock } from '../mock/vote.mock';

describe('VoteModel suite tests', () => {
    let mongooseBootstrap: MongooseBootstrapTest;

    beforeAll(async () => {
        mongooseBootstrap = new MongooseBootstrapTest();
        await mongooseBootstrap.initialize();
    });

    afterAll(async () => {
        await mongooseBootstrap.finish();
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

    it('When find vote by {id}, must be return found vote', async () => {
        const { _id: voteId } = await VoteModel.create(voteMock);

        const vote = await VoteModel.findById(voteId);

        expect(vote).not.toEqual({});
    });
});
