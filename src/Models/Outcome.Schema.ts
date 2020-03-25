import { Schema, Types } from 'mongoose';

export const OutcomeSchema = new Schema({
    ID: Types.ObjectId,
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
    ID: string;
    learningObjectID: string;
    bloom: string;
    verb: string;
    text: string;
    lastUpdated: Date;
    mappings: string[];
}

