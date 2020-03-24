import { Controller, Get, Body, Post, Patch, Delete, UsePipes, ValidationPipe, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
import { MappingWriteDTO } from './DTO/MappingWrite.DTO';
import { OutcomeWriteDTO } from './DTO/OutcomeWrite.DTO';
import { ApiBody, ApiOkResponse, ApiNotFoundResponse, ApiBadRequestResponse, ApiForbiddenResponse, ApiCreatedResponse, ApiUnauthorizedResponse, ApiConflictResponse, ApiNoContentResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOkResponse({ description: 'Welcome to the CLARK Outcome Service' })
  @Get()
  @HttpCode(200)
  getHello(): string {
    return 'Welcome to the CLARK Outcome Service';
  }

  @ApiOkResponse({ description: 'OK' })
  @ApiBadRequestResponse({ description: 'Invalid Learning Object ID || Invalid username' })
  @ApiForbiddenResponse({ description: 'If the object is unreleased and requester is not the author || If the object is waiting, review, or proofing and the requester is not privileged' })
  @ApiNotFoundResponse({ description: 'User is not found || Learning Object is not found' })
  @Get('/users/:username/learning-objects/:learning-object-ID/outcomes')
  @HttpCode(200)
  getOutcomes(): any {

  }

  @ApiCreatedResponse({ description: 'Created' })
  @ApiBadRequestResponse({ description: 'Invalid bloom || Invalid verb || Invalid username || Invalid Learning Object ID'})
  @ApiUnauthorizedResponse({ description: 'If the requester is not signed in' })
  @ApiForbiddenResponse({ description: 'If the Learning Object is unreleased and the requester is not the author || If the Learning Object is in waiting, review, or proofing and requester is not privileged || If the object is released' })
  @ApiNotFoundResponse({ description: 'Username not found || Learning Object not found'})
  @ApiBody({ type: OutcomeWriteDTO })
  @Post('/users/:username/learning-objects/:learning-object-ID/outcomes')
  @UsePipes(ValidationPipe)
  @HttpCode(201)
  addOutcome(@Body() outcomeWriteDTO: OutcomeWriteDTO): any {
    
  }

  @ApiNoContentResponse({ description: 'No Content' })
  @ApiBadRequestResponse({ description: 'Invalid bloom || Invalid text || Invalid verb || Invalid username || Invalid Learning Object ID || Invalid outcome ID'})
  @ApiUnauthorizedResponse({ description: 'If the requester is not signed in' })
  @ApiForbiddenResponse({ description: 'If Learning Object is unreleased and requester is not the author || If Learning Object is in waiting, review, proofing and requester is not privileged || If Learning Object is released' })
  @ApiNotFoundResponse({ description: 'Username not found || Learning Object not found || Outcome not found' })
  @ApiConflictResponse({ description: 'Update would create a duplicate' })
  @ApiBody({ type: OutcomeWriteDTO })
  @Patch('/users/:username/learning-objects/:learning-object-ID/outcomes/:outcome-ID')
  @UsePipes(ValidationPipe)
  @HttpCode(204)
  updateOutcome(@Body() outcomeWriteDTO: OutcomeWriteDTO): void {

  }

  @ApiNoContentResponse({ description: 'No Content' })
  @ApiBadRequestResponse({ description: 'Invalid username || Invalid Learning Object ID || Invalid Outcome ID' })
  @ApiUnauthorizedResponse({ description: 'If the requester is not signed in'})
  @ApiForbiddenResponse({ description: 'If Learning Object is released || If Learning Object is in waiting, review, proofing and requester is not privileged || If Learning Object is unreleased and requester is not the author' })
  @ApiNotFoundResponse({ description: 'Username not found || Learning Object not found ||  Outcome not found' })
  @Delete('/users/:username/learning-objects/:learning-object-ID/outcomes/:outcome-ID')
  @HttpCode(204)
  deleteOutcome(): any {

  }

  @ApiNoContentResponse({ description: 'No Content' })
  @ApiBadRequestResponse({ description: 'Invalid username' || 'Invalid Learning Object ID' || 'Invalid outcome ID || Invalid guideline ID' })
  @ApiUnauthorizedResponse({ description: 'If the requester is not signed in' })
  @ApiForbiddenResponse({ description: 'If Learning Object is unreleased and requester is not the author || If Learning Object is in waiting, review, proofing and requester is not privileged || If Learning Object is released and the requester is not a mapper, editor, or admin' })
  @ApiNotFoundResponse({ description: 'Username not found || Learning Object not found || Outcome not found || Guideline not found' })
  @ApiConflictResponse({ description: 'Update would create a duplicate'})
  @ApiBody({ type: MappingWriteDTO })
  @Post('/users/:username/learning-objects/:learning-object-ID/outcomes/:outcome-ID/mappings')
  @UsePipes(ValidationPipe)
  @HttpCode(204)
  addMapping(@Body() mappingWriteDTO: MappingWriteDTO): any {

  }

  @ApiNoContentResponse({ description: 'No Content' })
  @ApiBadRequestResponse({ description: 'Invalid username || Invalid Learning Object ID || Invalid Outcome ID || Invalid mapping ID' })
  @ApiUnauthorizedResponse({ description: 'The requester is not signed in' })
  @ApiForbiddenResponse({ description: 'If Learning Object is in waiting, review, proofing and requester is not privileged || If the Learning Object is released and the requester is not a mapper, editor, or admin || If Learning Object is unreleased and requester is not the author'})
  @ApiNotFoundResponse({ description: 'Username not found || Learning Object not found || Outcome not found || Mapping not found'})
  @Delete('/users/:username/learning-objects/:learning-object-ID/outcomes/:outcome-ID/mappings/:mapping-ID')
  @HttpCode(204)
  deleteMapping(): any {

  }
}


