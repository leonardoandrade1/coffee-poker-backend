import mongoose, { Schema } from "mongoose";
import IVote from "../interface/model/vote.interface";

const VoteSchema = new mongoose.Schema({
    storyId: Schema.Types.ObjectId,
    userId: String,
    vote: Number,
    votedAt: {
        type: Date,
        default: Date.now,
    },
});

const VoteModel = mongoose.model<IVote>("Vote", VoteSchema);

export default VoteModel;
