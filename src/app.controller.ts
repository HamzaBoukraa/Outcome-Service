import { Controller, Get, Body, Post, Patch, Delete, UsePipes, ValidationPipe, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
import { MappingWriteDTO } from './DTO/MappingWrite.DTO';
import { OutcomeWriteDTO } from './DTO/OutcomeWrite.DTO';
import { ApiBody, ApiOkResponse, ApiNotFoundResponse, ApiBadRequestResponse, ApiForbiddenResponse, ApiCreatedResponse, ApiUnauthorizedResponse, ApiConflictResponse, ApiNoContentResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * User is not found - 404
   * Learning Object is not found - 404
   * Invalid username - 400
   * Invalid Learning Object Id - 400
   * If the object is unreleased and requester is not the author - 403
   * If the object is waiting, review, or proofing and the requester is not privileged - 403
   * Success - 200
   */
  @ApiOkResponse()
  @ApiBadRequestResponse()
  @ApiForbiddenResponse()
  @ApiNotFoundResponse()
  @Get('/users/:username/learning-objects/:loid/outcomes')
  @HttpCode(200)
  getOutcomes(): any {

  }

  /**
   * 
   * @param mappingWriteDTO 
   * Success - 201
   * Invalid bloom - 400
   * Invalid verb - 400
   * Username not found - 404
   * Learning Object not found - 404
   * Invalid username - 400
   * Invalid Learning Object Id - 400
   * If the Learning Object is unreleased and the requester is not the author - 403
   * If the Learning Object is in waiting, review, or proofing and requester is not privileged - 403
   * If the object is released - 403
   * If the requester is not signed in - 401
   */
  @ApiCreatedResponse()
  @ApiBadRequestResponse()
  @ApiUnauthorizedResponse()
  @ApiForbiddenResponse()
  @ApiNotFoundResponse()
  @ApiBody({ type: OutcomeWriteDTO })
  @Post('/users/:username/learning-objects/:loid/outcomes')
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
  @Patch('/users/:username/learning-objects/:loid/outcomes/:outcomeId')
  @UsePipes(ValidationPipe)
  @HttpCode(204)
  updateOutcome(@Body() outcomeWriteDTO: OutcomeWriteDTO): void {

  }

  @ApiNoContentResponse({ description: 'No Content' })
  @ApiBadRequestResponse({ description: 'Invalid username || Invalid Learning Object ID || Invalid Outcome ID' })
  @ApiUnauthorizedResponse({ description: 'If the requester is not signed in'})
  @ApiForbiddenResponse({ description: 'If Learning Object is released || If Learning Object is in waiting, review, proofing and requester is not privileged || If Learning Object is unreleased and requester is not the author' })
  @ApiNotFoundResponse({ description: 'Username not found || Learning Object not found ||  Outcome not found' })
  @Delete('/users/:username/learning-objects/:loid/outcomes/:outcomeId')
  deleteOutcome(): any {

  }

  @ApiNoContentResponse({ description: 'No Content' })
  @ApiBadRequestResponse({ description: 'Invalid username' || 'Invalid Learning Object ID' || 'Invalid outcome ID || Invalid guideline ID' })
  @ApiUnauthorizedResponse({ description: 'If the requester is not signed in' })
  @ApiForbiddenResponse({ description: 'If Learning Object is unreleased and requester is not the author || If Learning Object is in waiting, review, proofing and requester is not privileged || If Learning Object is released and the requester is not a mapper, editor, or admin' })
  @ApiNotFoundResponse({ description: 'Username not found || Learning Object not found || Outcome not found || Guideline not found' })
  @ApiConflictResponse({ description: 'Update would create a duplicate'})
  @ApiBody({ type: MappingWriteDTO })
  @Post('/users/:username/learning-objects/:loid/outcomes/:outcomeId/mappings')
  @UsePipes(ValidationPipe)
  @HttpCode(204)
  addMapping(@Body() mappingWriteDTO: MappingWriteDTO): any {

  }

  @ApiNoContentResponse({ description: 'No Content' })
  @ApiBadRequestResponse({ description: 'Invalid username || Invalid Learning Object ID || Invalid Outcome ID || Invalid mapping ID' })
  @ApiUnauthorizedResponse({ description: 'The requester is not signed in' })
  @ApiForbiddenResponse({ description: 'If Learning Object is in waiting, review, proofing and requester is not privileged || If the Learning Object is released and the requester is not a mapper, editor, or admin || If Learning Object is unreleased and requester is not the author'})
  @ApiNotFoundResponse({ description: 'Username not found || Learning Object not found || Outcome not found || Mapping not found'})
  @Delete('/users/:username/learning-objects/:loid/outcomes/:outcomeId/mappings/:mappingId')
  @HttpCode(204)
  deleteMapping(): any {

  }
}


