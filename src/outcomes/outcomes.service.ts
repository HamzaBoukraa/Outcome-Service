import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { OutcomeWriteDTO } from '../DTO/OutcomeWrite.DTO';
import { OutcomeReadDTO } from '../DTO/OutcomeRead.DTO';

@Injectable()
export class OutcomesService {
    constructor(@InjectModel('Outcome') private outcomeModel: Model<any>, @InjectModel('Guideline') private guidelineModel: Model<any>) {}

    async findAll(): Promise<OutcomeReadDTO[]> {
        return this.outcomeModel.find().exec();
    }

    async findOutcomesForLearningObject(learningObjectId: string) {
        return this.outcomeModel.find({ learningObjectId }).exec();
    }

    async create(outcomeWriteDTO: OutcomeWriteDTO, learningObjectId: string ): Promise<void> {
      const createdOutcome = new this.outcomeModel({ ...outcomeWriteDTO, learningObjectId, lastUpdated: Date.now() });
      return createdOutcome.save();
    }

    async update(outcomeWriteDTO: OutcomeWriteDTO, outcomeID: string): Promise<void> {

        await this.outcomeModel.updateOne({ _id: new Types.ObjectId(outcomeID) }, { $set: { ...outcomeWriteDTO, lastUpdated: Date.now() }});
    }

    async delete(outcomeID: string) {
        await this.outcomeModel.deleteOne({ _id: outcomeID });
    }

    async addMapping(outcomeID: string, guidelineID: string) {

    }

    async deleteMapping(outcomeID: string, guidelineID: string) {

    }

    async findOne(outcomeID: string) {
        return this.outcomeModel.findOne({ _id: new Types.ObjectId(outcomeID) });
    }

    async findExactOutcomeMatch(outcomeWriteDTO: OutcomeWriteDTO) {
        return this.outcomeModel.findOne({ verb: outcomeWriteDTO.verb, text: outcomeWriteDTO.text, bloom: outcomeWriteDTO.bloom });
    }

    async getGuideline(guidelineID: string) {
        return this.guidelineModel.findOne({ _id: new Types.ObjectId(guidelineID) });
    }

}
