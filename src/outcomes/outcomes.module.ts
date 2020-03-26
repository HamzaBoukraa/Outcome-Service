import { Module } from '@nestjs/common';
import { OutcomesController } from './outcomes.controller';
import { OutcomesService } from './outcomes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OutcomeSchema } from 'src/Models/Outcome.Schema';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Outcome', schema: OutcomeSchema }])],
  controllers: [OutcomesController],
  providers: [OutcomesService, JwtStrategy]
})
export class OutcomesModule {}
