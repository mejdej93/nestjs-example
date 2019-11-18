import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        auto: true,
        unique: true
    },
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});