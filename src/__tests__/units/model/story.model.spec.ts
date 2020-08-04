import { MongooseBootstrapTest } from '../../config/bootstrap';
import StoryModel from '../../../model/story.model';

import { unfinishedStoryMock } from '../mock/story.mock';

describe('StoryModel Suite Tests', () => {
    let mongooseBootstrap: MongooseBootstrapTest;

    beforeAll(async () => {
        mongooseBootstrap = new MongooseBootstrapTest();
        await mongooseBootstrap.initialize();
    });

    afterAll(async () => {
        await mongooseBootstrap.finish();
    });

    beforeEach(async () => {
        await StoryModel.deleteMany({});
    });

    it('Should create the story to be voted', async () => {
        const story = await StoryModel.create(unfinishedStoryMock);

        expect(story).not.toEqual({});
    });

    it('Created story should return {_id}', async () => {
        const story = await StoryModel.create(unfinishedStoryMock);

        expect(story._id).not.toBeNull();
    });

    it('Should return error when create story without {title}', async () => {
        const storyPayload = {
            ...unfinishedStoryMock,
        };

        delete storyPayload['title'];

        try {
            await StoryModel.create(storyPayload);
        } catch (error) {
            expect(StoryModel.create).toThrowError();
        }
    });

    it('When find story by {id}, must be return found story', async () => {
        const { _id: storyId } = await StoryModel.create(unfinishedStoryMock);

        const story = await StoryModel.findById(storyId);

        expect(story).not.toEqual({});
    });
});
