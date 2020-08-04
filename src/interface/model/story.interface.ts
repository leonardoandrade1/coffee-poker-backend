import IVote from './vote.interface';

interface IStory {
    title: string;
    finished?: boolean;
    finishedAt?: Date;
    finalScore?: Date;
    votes?: Array<IVote>;
}

export default IStory;
