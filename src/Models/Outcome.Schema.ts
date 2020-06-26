import { Schema, Types } from 'mongoose';

export const OutcomeSchema = new Schema({
    _id: Types.ObjectId,
    learningObjectId: String,
    bloom: String,
    verb: String,
    text: String,
    lastUpdated: Date,
    mappings: [String],
},
{ 
    collection : 'outcomes' 
});

export interface Outcome {
    _id: string;
    learningObjectID: string;
    bloom: string;
    verb: string;
    text: string;
    lastUpdated: Date;
    mappings: string[];
}

