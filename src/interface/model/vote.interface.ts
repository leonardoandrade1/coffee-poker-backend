import { Document } from "mongoose";

interface IVote extends Document {
    storyId: String;
    userId: String;
    vote: Number;
    votedAt: Date;
}

export default IVote;
