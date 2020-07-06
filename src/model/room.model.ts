import mongoose from "mongoose";
import IRoom from "../interface/model/room.interface";

const RoomSchema = new mongoose.Schema(
    {
        ownerId: {
            type: String,
            trim: true,
            lowercase: true,
        },
        ownerName: String,
        maxUsers: {
            type: Number,
            default: 15,
        },
        endedAt: {
            type: Date,
        },
    },
    {
        timestamps: {
            currentTime: () => Math.floor(Date.now() / 1000),
        },
    }
);

const RoomModel = mongoose.model<IRoom>("Room", RoomSchema);

export default RoomModel;
