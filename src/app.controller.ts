import { Controller, Get, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOkResponse({ description: 'Welcome to the CLARK Outcome Service' })
  @Get()
  @HttpCode(200)
  getHello(): string {
    return 'Welcome to the CLARK Outcome Service';
  }
}


