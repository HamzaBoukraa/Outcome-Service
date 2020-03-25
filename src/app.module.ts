import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OutcomesModule } from './outcomes/outcomes.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/outcomes'), OutcomesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
