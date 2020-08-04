import mongoose from 'mongoose';

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

const VoteModel = mongoose.model('Vote', VoteSchema);

export default VoteModel;
