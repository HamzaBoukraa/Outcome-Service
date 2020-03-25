import { Controller, Get, Body, Post, Patch, Delete, UsePipes, ValidationPipe, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
import { MappingWriteDTO } from './DTO/MappingWrite.DTO';
import { OutcomeWriteDTO } from './DTO/OutcomeWrite.DTO';
import { ApiBody, ApiOkResponse, ApiNotFoundResponse, ApiBadRequestResponse, ApiForbiddenResponse, ApiCreatedResponse, ApiUnauthorizedResponse, ApiConflictResponse, ApiNoContentResponse } from '@nestjs/swagger';
import { OutcomeReadDTO } from './DTO/OutcomeRead.DTO';

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


