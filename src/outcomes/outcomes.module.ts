import { Module } from '@nestjs/common';
import { OutcomesController } from './outcomes.controller';
import { OutcomesService } from './outcomes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OutcomeSchema } from 'src/Models/Outcome.Schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Outcome', schema: OutcomeSchema }])],
  controllers: [OutcomesController],
  providers: [OutcomesService]
})
export class OutcomesModule {}
