import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OutcomeWriteDTO } from '../DTO/OutcomeWrite.DTO';
import { OutcomeReadDTO } from '../DTO/OutcomeRead.DTO';

@Injectable()
export class OutcomesService {
    constructor(@InjectModel('Outcome') private outcomeModel: Model<any>) {}

    async findAll(): Promise<OutcomeReadDTO[]> {
        return this.outcomeModel.find().exec();
    }

    async create(outcomeWriteDTO: OutcomeWriteDTO): Promise<void> {
      const createdOutcome = new this.outcomeModel(outcomeWriteDTO);
      return createdOutcome.save();
    }

    async update(outcomeWriteDTO: OutcomeWriteDTO, outcomeID: string): Promise<void> {
        await this.outcomeModel.updateOne({ _id: outcomeID }, { $set: { outcomeWriteDTO }});
    }

    async delete(outcomeID: string) {
        await this.outcomeModel.deleteOne({ _id: outcomeID });
    }

    async addMapping(outcomeID: string, guidelineID: string) {

    }

    async deleteMapping(outcomeID: string, guidelineID: string) {

    }

}
