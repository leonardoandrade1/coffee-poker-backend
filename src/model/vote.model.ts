import mongoose from 'mongoose';
import IVote from '../interface/model/vote.interface';

const VoteSchema = new mongoose.Schema({
    storyId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    vote: {
        type: Number,
        required: true,
    },
    votedAt: {
        type: Date,
        default: Date.now,
    },
});

const VoteModel = mongoose.model<IVote>('Vote', VoteSchema);

export default VoteModel;
