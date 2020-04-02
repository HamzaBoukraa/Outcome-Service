import { Module } from '@nestjs/common';
import { OutcomesController } from './outcomes.controller';
import { OutcomesService } from './outcomes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OutcomeSchema } from 'src/Models/Outcome.Schema';
import { JwtStrategy } from './jwt.strategy';
import { GuidelineSchema } from 'src/Models/Guideline.Schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{ name: 'Outcome', schema: OutcomeSchema }], 'outcomeDB'), 
    MongooseModule.forFeature([{ name: 'Guideline', schema: GuidelineSchema }], 'onionDB')
  ],
  controllers: [OutcomesController],
  providers: [OutcomesService, JwtStrategy]
})
export class OutcomesModule {}
