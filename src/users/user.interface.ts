import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export interface User extends Document {
    _id: mongoose.Types.ObjectId;
    firstName: {
        type: string,
        required: true
    };
    lastName: {
        type: string,
        required: true
    };
    email: {
        type: string,
        required: true
    };
}
