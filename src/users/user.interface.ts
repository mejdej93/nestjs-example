import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export interface User extends Document {
    _id: mongoose.Types.ObjectId;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
