import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema(
    {
        ownerId: {
            type: String,
            trim: true,
            lowercase: true,
            required: true,
        },
        ownerName: {
            type: String,
            required: true,
        },
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
    },
);

const RoomModel = mongoose.model('Room', RoomSchema);

export default RoomModel;
