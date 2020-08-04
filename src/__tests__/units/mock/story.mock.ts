import faker from 'faker';
import IStory from 'interface/model/story.interface';

const unfinishedStoryMock: IStory = {
    title: faker.random.words(),
};

export { unfinishedStoryMock };
