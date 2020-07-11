import { Document } from "mongoose";
import IVote from "./vote.interface";

interface IStory extends Document {
    title: string;
    finished: boolean;
    finishedAt: Date;
    finalScore: Date;
    votes: Array<IVote>;
}

export default IStory;
