import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { OutcomesModule } from './outcomes/outcomes.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URI_OUTCOMES, { connectionName: 'outcomeDB'}),
    MongooseModule.forRoot(process.env.DB_URI_ONION, { connectionName: 'onionDB'}),
    OutcomesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

