import { Document } from "mongoose";

interface IVote extends Document {
    storyId: string;
    userId: string;
    vote: number;
    votedAt: Date;
}

export default IVote;
