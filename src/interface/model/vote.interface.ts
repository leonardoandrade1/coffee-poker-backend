interface IVote {
    storyId: string;
    userId: string;
    vote: number;
    votedAt: Date;
}

export default IVote;
