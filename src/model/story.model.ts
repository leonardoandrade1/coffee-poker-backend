import mongoose, { Schema } from 'mongoose';

const StorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    finished: {
        type: Boolean,
        required: true,
        default: false,
    },
    finishedAt: {
        type: Date,
        required: false,
    },
    finalScore: {
        type: Number,
        default: 0,
    },
    votes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Vote',
        },
    ],
});

const StoryModel = mongoose.model('Story', StorySchema);

export default StoryModel;
