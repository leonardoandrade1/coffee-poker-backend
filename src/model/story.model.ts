import mongoose, { Schema } from "mongoose";
import IStory from "../interface/model/story.interface";

const StorySchema = new mongoose.Schema({
    title: String,
    finished: Boolean,
    finishedAt: Date,
    finalScore: Number,
    votes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Vote",
        },
    ],
});

const StoryModel = mongoose.model<IStory>("Story", StorySchema);

export default StoryModel;
