import { Document } from "mongoose";
import IVote from "./vote.interface";

interface IStory extends Document {
    title: String;
    finished: Boolean;
    finishedAt: Date;
    finalScore: Date;
    votes: Array<IVote>;
}

export default IStory;
