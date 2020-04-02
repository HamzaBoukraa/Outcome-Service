import { Schema, Types } from 'mongoose';

export const GuidelineSchema = new Schema({
    ID: Types.ObjectId,
    author: String,
    date: Number,
    outcome: String,
    source: String,
    tag: String,
    name: String,
},{
    collection: 'outcomes'
});